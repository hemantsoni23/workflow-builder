"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, X } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";

const Auth = ({ close, onAuthenticate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (type) => {
    const { name, email, password } = formData;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,}$/;
    
    if (!email || !email.includes("@") || email.length < 5) return "Invalid email format.";
    if (!password || !passwordRegex.test(password)) 
      return "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%).";
    if (type === "signup" && (!name || name.trim().length < 3)) return "Name must be at least 3 characters long.";
    return "";
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const error = validateForm(type);
    if (error) {
      toast.error(error);
      return;
    }
    
    setIsSubmitting(true);
    try {
      const endpoint = type === "signup" ? "/api/auth/register" : "/api/auth/login";
      const response = await axios.post(endpoint, { ...formData }, { withCredentials: true });
      
      if (response.data.message === "Login successful" || response.data.message === "Registration successful") {
        if (onAuthenticate) onAuthenticate();
        if (close) close();
        router.push("/");
        setTimeout(() => toast.success(`${response.data.message}!`), 300);
      } else {
        toast.error("Authentication failed. Please try again.");
      }
    } catch (error) {
      console.error(`${type} error:`, error);
      toast.error(error?.response?.data?.message || "Server error!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse || !credentialResponse.credential) {
      toast.error("Google authentication failed. Missing credentials.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const token = credentialResponse.credential;
      const response = await axios.post("/api/auth/google-login", { token }, { withCredentials: true });
      
      if (response && response.data) {
        if (onAuthenticate) onAuthenticate();
        if (close) close();
        router.push("/");
        toast.success("Google login successful!");
      } else {
        toast.error("Google authentication failed. Try again.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error(error?.response?.data?.message || "Google login failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login error:", error);
    toast.error("Google login failed. Please try again.");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-md relative">
        <button 
          onClick={close} 
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors" 
          aria-label="Close"
          type="button"
        >
          <X size={24} />
        </button>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 rounded-lg p-1">
            <TabsTrigger value="login" className="rounded-md font-medium text-sm">Login</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-md font-medium text-sm">Sign up</TabsTrigger>
          </TabsList>
          
          {["login", "signup"].map((type) => (
            <TabsContent key={type} value={type} className="animate-in slide-in-from-left-2 duration-200">
              <Card className="shadow-lg border-neutral-200 dark:border-neutral-800">
                <CardHeader className="space-y-1 pb-4">
                  <CardTitle className="text-2xl font-bold">{type === "login" ? "Welcome back" : "Create an account"}</CardTitle>
                  <CardDescription className="text-neutral-500 dark:text-neutral-400">
                    {type === "login" ? "Enter your credentials to access your account" : "Enter your details to get started"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, type)} className="space-y-4">
                    {type === "signup" && (
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          name="name" 
                          placeholder="John Doe" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required={type === "signup"}
                          className="h-10 focus-visible:ring-primary" 
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor={`${type}-email`} className="text-sm font-medium">Email</Label>
                      <Input 
                        id={`${type}-email`}
                        type="email" 
                        name="email" 
                        placeholder="your@email.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="h-10 focus-visible:ring-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`${type}-password`} className="text-sm font-medium">Password</Label>
                      <div className="relative">
                        <Input 
                          id={`${type}-password`}
                          type={showPassword ? "text" : "password"} 
                          name="password" 
                          placeholder="••••••••" 
                          value={formData.password} 
                          onChange={handleChange} 
                          required 
                          className="h-10 pr-10 focus-visible:ring-primary" 
                        />
                        <button 
                          type="button" 
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300" 
                          onClick={() => setShowPassword(!showPassword)} 
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full font-medium h-10 transition-all hover:shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : (type === "login" ? "Sign in" : "Sign up")}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col pt-0">
                  <div className="w-full">
                    <GoogleLogin 
                      onSuccess={handleGoogleSuccess} 
                      onError={handleGoogleFailure}
                      disabled={isSubmitting}
                    />
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
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
// import GoogleSignInButton from "@/components/GoogleSignInButton";
import { GoogleLogin } from "@react-oauth/google";

const Auth = ({ close }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (type) => {
    const { name, email, password } = formData;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,}$/;
    if (!email.includes("@") || email.length < 5) return "Invalid email format.";
    if (!passwordRegex.test(password)) 
      return "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%).";
    if (type === "signup" && name.trim().length < 3) return "Name must be at least 3 characters long.";
    return "";
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const error = validateForm(type);
    if (error) return alert(error);
    
    try {
      const endpoint = type === "signup" ? "/api/auth/register" : "/api/auth/login";
      const response = await axios.post(endpoint, { ...formData }, { withCredentials: true });
      
      if (response.data?.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/");
        close();
        setTimeout(() => alert(`${type} successful!`), 300);
      } else {
        alert("Authentication failed. Please try again.");
      }
    } catch (error) {
      console.error(`${type} error:`, error);
      alert(error?.response?.data?.message || "Server error!");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      console.log("Token ==>",token);
      const response = await axios.post("/api/auth/google-login", { token }, { withCredentials: true });

      if (response.data?.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        close();
        router.push("/");
        alert("Google login successful!");
      } else {
        alert("Google authentication failed. Try again.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert(error?.response?.data?.message || "Google login failed!");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login error:", error);
    alert("Google login failed. Please try again.");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-md relative">
        <button onClick={close} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors" aria-label="Close">
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
                        <Input id="name" type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="h-10 focus-visible:ring-primary" />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input id="email" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className="h-10 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                      <div className="relative">
                        <Input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required className="h-10 pr-10 focus-visible:ring-primary" />
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full font-medium h-10 transition-all hover:shadow-md">
                      {type === "login" ? "Sign in" : "Sign up"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col pt-0">
                  <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
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

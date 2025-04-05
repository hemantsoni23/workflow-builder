import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

const GoogleSignInButton = ({ onSuccess, onError }) => {
  const login = useGoogleLogin({
    onSuccess: onSuccess,
    onError: onError,
  });

  return (
    <Button
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 transition-all"
    >
      <FaGoogle size={20} />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleSignInButton;

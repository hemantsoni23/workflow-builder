// import { FullLogo } from '@/components/ui/full-logo';
// import { AuthFormTemplate } from '@/features/authentication/components/auth-form-template';

// const SignInPage: React.FC = () => {
//   return (
//     <div className="flex h-screen flex-col items-center justify-center gap-2">
//       <h1>Anoop Yadav</h1>
//       <FullLogo />
//       <AuthFormTemplate form={'signin'} />
//     </div>
//   );
// };

// SignInPage.displayName = 'SignInPage';

// export { SignInPage };



import { FullLogo } from '@/components/ui/full-logo';
import { AuthFormTemplate } from '@/features/authentication/components/auth-form-template';

const SignInPage: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1>Nitin Kumar</h1>
      <FullLogo />
      <AuthFormTemplate form={'signin'} />
      {/* Temporary debug input to check if input field renders */}
      <input 
        type="email" 
        placeholder="Debug: Enter your email" 
        className="border border-gray-300 p-2 mt-4" 
      />
    </div>
  );
};

SignInPage.displayName = 'SignInPage';

export { SignInPage };

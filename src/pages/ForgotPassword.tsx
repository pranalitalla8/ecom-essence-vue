import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Gavel, Mail } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
    toast.success("Password reset link sent to your email!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-mint via-pastel-blue to-pastel-lavender p-4">
      {/* Floating decorative elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-pastel-pink rounded-full opacity-30 blur-3xl animate-float" />
      <div className="absolute bottom-16 right-16 w-40 h-40 bg-pastel-peach rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <Card className="w-full max-w-md shadow-2xl border-0 animate-fade-in backdrop-blur-sm bg-card/95">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <div className="p-3 bg-pastel-mint rounded-2xl">
              {isSubmitted ? (
                <Mail className="w-8 h-8 text-primary" />
              ) : (
                <Gavel className="w-8 h-8 text-primary" />
              )}
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">
            {isSubmitted ? "Check Your Email" : "Reset Password"}
          </CardTitle>
          <CardDescription className="text-base">
            {isSubmitted 
              ? "We've sent you a password reset link" 
              : "Enter your email to receive a reset link"
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {isSubmitted ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-pastel-mint/20 border-2 border-pastel-mint">
                <p className="text-sm text-center text-muted-foreground">
                  We've sent a password reset link to <strong className="text-foreground">{email}</strong>. 
                  Please check your inbox and spam folder.
                </p>
              </div>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full h-11 rounded-xl border-2 hover:bg-pastel-mint hover:border-pastel-mint transition-colors"
              >
                Try Different Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl border-2 focus:border-pastel-mint transition-colors"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 rounded-xl bg-gradient-to-r from-pastel-mint to-pastel-blue text-primary hover:opacity-90 transition-opacity font-semibold"
              >
                Send Reset Link
              </Button>
            </form>
          )}

          <div className="pt-2">
            <Link 
              to="/login"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link 
              to="/signup" 
              className="text-primary hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;

// src/pages/Login.jsx
import Logo from "../../components/Logo";
import Card from "../../components/Card";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import Button from "../../components/Button";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  const roleOptions = [
    "Manager",
    "Accountant",
    "Sales Executive",
    "Inventory Staff",
    "HR Staff",
    "Production Staff",
    "Store Staff",
    "Sales Staff",
    "General Staff",
  ];

  return (
    <div className="min-h-screen bg-[#e0f2fe] flex flex-col">
      {/* Responsive Header */}
      <header className="w-full px-5 sm:px-8 md:px-12 py-4 md:py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex-shrink-0">
            <Logo /> {/* Your Logo component – should scale nicely */}
          </div>

          {/* Back link on right */}
          <a
            href="/"
            className="
              text-blue-600 text-sm sm:text-base 
              font-medium hover:text-blue-800 
              transition-colors flex items-center gap-1.5
            "
          >
            <span className="hidden sm:inline">←</span> Back to Home
          </a>
        </div>
      </header>

      {/* Main Content - Centered Form */}
      <main className="flex-1 flex items-center justify-center px-5 py-10 md:py-0">
        <Card className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            Connect to your Business
          </h1>
          <p className="text-center text-gray-600 mb-8 md:mb-10">
            by <span className="text-blue-600 font-semibold">Signing In</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <InputField
              label="Business Name"
              placeholder="Enter exact Business Name"
              required
            />

            <InputField
              label="Email"
              type="email"
              placeholder="Enter Email address"
              required
            />

            <InputField
              label="Business Password"
              type="password"
              placeholder="Enter Business Password"
              required
            />

            <SelectField
              label="Role"
              name="role"
              options={roleOptions}
              placeholder="Select your role"
              required
            />

            <div className="pt-3 md:pt-4">
              <Button fullWidth size="lg">
                Join
              </Button>
            </div>

            <div className="text-center mt-4">
              <a
                href="/forgot"
                className="text-blue-600 text-sm hover:text-blue-800 hover:underline transition-colors"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Login;
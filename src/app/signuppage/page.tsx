import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/image/hero.JPEG')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Sign up page</h2>
          <p>
            <Link href="/" className="text-yellow-400">Home</Link> › Sign up
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img src="/images/google-icon.png" alt="Google" className="h-6 mr-2" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img src="/images/apple-icon.png" alt="Apple" className="h-6 mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto py-10 px-6 grid grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p>
              Corporate clients and leisure travelers rely on FoodTuck for dependable service.
            </p>
            <p className="mt-2">Opening Hours: Mon-Sat 9:00 AM - 6:00 PM</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold mb-2">Useful Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h4 className="font-bold mb-2">Help</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/support-policy">Support Policy</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div>
            <h4 className="font-bold mb-2">Recent Posts</h4>
            <ul>
              <li>Is fast food good for your body? - Feb 20, 2022</li>
              <li>Change your food habit - Feb 18, 2022</li>
              <li>Do you like fast food? - Feb 15, 2022</li>
            </ul>
          </div>
        </div>
        <p className="text-center py-4">
          © 2024 FoodTuck. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
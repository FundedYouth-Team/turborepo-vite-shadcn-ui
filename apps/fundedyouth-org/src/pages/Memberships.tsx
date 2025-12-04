// src/pages/Memberships.tsx

import { Check, Snowflake, Clock, Zap, TrendingUp } from "lucide-react";

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  credits?: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonColor?: string;
  badge?: string;
}

function PricingTier({
  name,
  price,
  period = "/month",
  credits,
  features,
  highlighted = false,
  buttonText,
  buttonColor = "bg-blue-600 hover:bg-blue-700",
  badge,
}: PricingTierProps) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl shadow-lg transition-transform hover:scale-105 ${
        highlighted
          ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white ring-4 ring-blue-300"
          : "bg-white text-gray-900"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <h3
        className={`text-2xl font-bold mb-2 ${highlighted ? "text-white" : "text-gray-900"}`}
      >
        {name}
      </h3>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`text-lg ${highlighted ? "text-blue-100" : "text-gray-500"}`}>
          {period}
        </span>
      </div>

      {credits && (
        <div
          className={`mb-6 py-3 px-4 rounded-lg ${
            highlighted ? "bg-blue-500/30" : "bg-blue-50"
          }`}
        >
          <span className={`text-lg font-semibold ${highlighted ? "text-white" : "text-blue-600"}`}>
            {credits}
          </span>
        </div>
      )}

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-green-300" : "text-green-500"
              }`}
            />
            <span className={highlighted ? "text-blue-100" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          highlighted
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : buttonColor + " text-white"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

function CreditBankExplainer() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-100 rounded-full">
          <TrendingUp className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          Credit Bank Rollover (Tier-2 Only)
        </h3>
      </div>

      <p className="text-gray-600 mb-8 text-lg">
        With Tier-2, your unused credits roll over into a Credit Bank (up to 45 credits max).
        Here's how it works:
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Month 1 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              Month 1
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Starting Credits</span>
              <span className="font-semibold">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Credits Used</span>
              <span className="font-semibold text-red-500">-15</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-500">Unused</span>
              <span className="font-bold text-green-600">30</span>
            </div>
            <div className="flex justify-between bg-green-50 -mx-2 px-2 py-1 rounded">
              <span className="text-gray-600">Bank Balance</span>
              <span className="font-bold text-green-700">30</span>
            </div>
          </div>
        </div>

        {/* Month 2 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              Month 2
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Starting Credits</span>
              <span className="font-semibold">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Starting Bank</span>
              <span className="font-semibold text-green-600">+30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Credits Used</span>
              <span className="font-semibold text-red-500">-25</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-500">Unused</span>
              <span className="font-bold text-green-600">20</span>
            </div>
            <div className="flex justify-between bg-green-50 -mx-2 px-2 py-1 rounded">
              <span className="text-gray-600">Bank Balance</span>
              <span className="font-bold text-green-700">45</span>
            </div>
          </div>
        </div>

        {/* Month 3 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-orange-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              Month 3
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Starting Credits</span>
              <span className="font-semibold">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Starting Bank</span>
              <span className="font-semibold text-green-600">+45</span>
            </div>
            <div className="flex justify-between items-center bg-orange-50 -mx-2 px-2 py-1 rounded">
              <span className="text-orange-700 text-xs">Bank capped at 45</span>
              <span className="font-bold text-orange-600">MAX</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-600 font-medium">Total Available</span>
              <span className="font-bold text-blue-600 text-lg">90</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 text-sm">
          <strong>Bank Rule:</strong> Your Credit Bank balance = min(Last Bank + Unused Credits, 45).
          The bank caps at 45 credits maximum, giving you up to 90 total credits per month when combined with your monthly 45.
        </p>
      </div>
    </div>
  );
}

function FreezeAccountSection() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-sky-200 rounded-full">
              <Snowflake className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Freeze Your Account
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-6">
            Going on vacation? Taking a break? Freeze your membership to pause billing
            while keeping your Credit Bank balance safe. Your banked credits will be
            waiting for you when you return.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-sky-600" />
              <span>Pause monthly billing anytime</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-sky-600" />
              <span>Credit Bank balance preserved</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-sky-600" />
              <span>Reactivate with one click</span>
            </li>
          </ul>
        </div>

        <div className="flex-shrink-0">
          <button className="flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors shadow-lg">
            <Snowflake className="w-5 h-5" />
            Learn About Freezing
          </button>
        </div>
      </div>
    </div>
  );
}

function CreditUsageInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        How Credits Work
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Bambu Printers</h4>
            <p className="text-gray-600 text-sm">2 credits per hour of print time</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Makerspace Access</h4>
            <p className="text-gray-600 text-sm">Included with membership</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Classes</h4>
            <p className="text-gray-600 text-sm">Member discounts on select classes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Memberships() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Membership Plans
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the plan that fits your maker journey. From casual visitors to dedicated creators,
            we have options for everyone.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative -mt-12 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Non-Member */}
            <PricingTier
              name="Non-Member"
              price="$3"
              period="/hour"
              features={[
                "Pay-as-you-go access",
                "Processing fee applies",
                "No monthly commitment",
                "Great for one-time projects",
              ]}
              buttonText="Visit as Guest"
              buttonColor="bg-gray-600 hover:bg-gray-700"
            />

            {/* Tier 1 */}
            <PricingTier
              name="Tier 1"
              price="$15"
              credits="20 credits/month"
              features={[
                "Bambu printers: 2 credits/hour",
                "Makerspace access included",
                "Member class discounts",
                "No credit rollover",
              ]}
              buttonText="Get Started"
            />

            {/* Tier 2 */}
            <PricingTier
              name="Tier 2"
              price="$30"
              credits="45 credits/month"
              features={[
                "Bambu printers: 2 credits/hour",
                "Makerspace access included",
                "Member class discounts",
                "Credit Bank rollover (up to 45)",
                "Priority support",
              ]}
              highlighted
              buttonText="Best Value"
              badge="Most Popular"
            />
          </div>
        </div>
      </section>

      {/* Credit Usage Info */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <CreditUsageInfo />
        </div>
      </section>

      {/* Credit Bank Explainer */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-5xl">
          <CreditBankExplainer />
        </div>
      </section>

      {/* Freeze Account Section */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          <FreezeAccountSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Making?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community of creators and bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Sign Up Now
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

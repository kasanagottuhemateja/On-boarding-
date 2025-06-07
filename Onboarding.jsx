import { useState } from "react";

function Onboarding({ setOnboarded }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    size: "",
    theme: "light",
    layout: "default"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleSubmit = () => {
    localStorage.setItem("userData", JSON.stringify(form));
    setOnboarded(true);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="w-full bg-gray-300 h-2 mb-4">
        <div className={`bg-blue-600 h-2`} style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>
      {step === 1 && (
        <div>
          <h2 className="text-xl mb-2">Step 1: Personal Info</h2>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="block w-full p-2 mb-2 border" required />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="block w-full p-2 mb-2 border" required />
          <button onClick={next} className="px-4 py-2 bg-blue-500 text-white">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl mb-2">Step 2: Business Info</h2>
          <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className="block w-full p-2 mb-2 border" required />
          <input name="industry" placeholder="Industry" value={form.industry} onChange={handleChange} className="block w-full p-2 mb-2 border" required />
          <input name="size" placeholder="Company Size" value={form.size} onChange={handleChange} className="block w-full p-2 mb-2 border" required />
          <button onClick={back} className="px-4 py-2 bg-gray-400 mr-2 text-white">Back</button>
          <button onClick={next} className="px-4 py-2 bg-blue-500 text-white">Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-xl mb-2">Step 3: Preferences</h2>
          <select name="theme" value={form.theme} onChange={handleChange} className="block w-full p-2 mb-2 border">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <select name="layout" value={form.layout} onChange={handleChange} className="block w-full p-2 mb-2 border">
            <option value="default">Default</option>
            <option value="compact">Compact</option>
          </select>
          <button onClick={back} className="px-4 py-2 bg-gray-400 mr-2 text-white">Back</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white">Submit</button>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
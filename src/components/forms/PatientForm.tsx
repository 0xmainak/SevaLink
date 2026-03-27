"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitFormAction } from "@/actions";

export function PatientForm() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await submitFormAction("patient", formData);
    setSuccessMsg(res.summary);
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMsg && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-200">
          <p className="font-semibold mb-1">Request Submitted Successfully</p>
          <p className="text-green-700">{successMsg}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+1 234 567 890" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" required placeholder="City, State" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="need">Medical Need</Label>
        <Textarea id="need" name="need" required placeholder="Describe the assistance required..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="urgency">Urgency Level</Label>
        <select id="urgency" name="urgency" required className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High - Urgent</option>
          <option value="critical">Critical - Emergency</option>
        </select>
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}

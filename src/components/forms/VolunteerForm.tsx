"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitFormAction } from "@/actions";

export function VolunteerForm() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await submitFormAction("volunteer", formData);
    setSuccessMsg(res.summary);
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMsg && (
        <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-orange-50 border border-orange-200">
          <p className="font-semibold mb-1">Application Submitted</p>
          <p className="text-orange-700">{successMsg}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">Contact Number</Label>
          <Input id="contact" name="contact" type="tel" required placeholder="+1 987 654 321" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" required placeholder="City, State" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="skills">Professional Skills</Label>
        <Textarea id="skills" name="skills" required placeholder="Nursing, Logistics, Translation..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Input id="availability" name="availability" required placeholder="Weekends, Evenings" />
      </div>
      <Button variant="default" type="submit" className="w-full" disabled={loading}>
        {loading ? "Registering..." : "Join as Volunteer"}
      </Button>
    </form>
  );
}

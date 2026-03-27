"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PatientForm } from "./PatientForm";
import { VolunteerForm } from "./VolunteerForm";

export function FormContainer() {
  const [activeTab, setActiveTab] = useState<"patient" | "volunteer">("patient");

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-orange-200/50 overflow-hidden">
      <div className="flex border-b border-orange-100">
        <button
          onClick={() => setActiveTab("patient")}
          className={cn(
            "flex-1 px-4 py-4 text-sm font-medium transition-colors hover:bg-orange-50/50 relative",
            activeTab === "patient" ? "text-orange-600" : "text-stone-500"
          )}
        >
          Patient Support
          {activeTab === "patient" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("volunteer")}
          className={cn(
            "flex-1 px-4 py-4 text-sm font-medium transition-colors hover:bg-orange-50/50 relative",
            activeTab === "volunteer" ? "text-orange-600" : "text-stone-500"
          )}
        >
          Volunteer
          {activeTab === "volunteer" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600" />
          )}
        </button>
      </div>
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-800">
            {activeTab === "patient" && "Request Assistance"}
            {activeTab === "volunteer" && "Join Our Network"}
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            {activeTab === "patient" && "Submit a request for patient help, medication, or emergency support."}
            {activeTab === "volunteer" && "Register to provide medical, logistical, or general support."}
          </p>
        </div>
        {activeTab === "patient" && <PatientForm />}
        {activeTab === "volunteer" && <VolunteerForm />}
      </div>
    </div>
  );
}

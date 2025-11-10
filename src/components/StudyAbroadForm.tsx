import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudyAbroadFormProps {
  onBack: () => void;
}

export const StudyAbroadForm = ({ onBack }: StudyAbroadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Section 1: Personal Information
    fullName: "",
    email: "",
    whatsapp: "",
    age: "",
    gender: "",

    // Section 2: Education Background
    educationLevel: "",
    schoolName: "",
    courseOfStudy: "",
    cgpa: "",
    graduationYear: "",

    // Section 3: Study Plans
    studyLevel: "",
    preferredField: "",
    startDate: "",
    preferredCountry: "",
    openToOtherCountries: "",
    otherCountries: "",

    // Section 4: Financial Preparation
    sponsor: "",
    budgetRange: "",
    proofOfFunds: "",

    // Section 5: Visa and Travel Info
    previousVisa: "",
    visaCountry: "",
    visaStatus: "",
    hasPassport: "",
    hasVisaStamps: "",
    stampCount: "",
    stampDetails: "",

    // Section 6: Consultation
    openToConsultation: "",
  });

  const [loading, setLoading] = useState(false);

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     // Create Google Form URL with pre-filled data
  //     // Replace with your actual Google Form ID
  //     const googleUrl =
  //       "https://script.google.com/macros/s/AKfycbylB5jb5S14PglhhFcEe_0AEeEFZLv3IGKH91BrJTYJzvtYsJM6In0-R8qqUuVHOmD6dA/exec";

  //     toast({
  //       title: "Form Submitted Successfully!",
  //       description:
  //         "We'll review your application and get back to you within 24-48 hours.",
  //     });

  //     // In production, you would redirect to Google Form or submit via API
  //     console.log("Form Data:", formData);
  //   };

  const [errors, setErrors] = useState<Record<string, string>>({});

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Submitting…");

  //   const requiredFields = [
  //     "gender",
  //     "educationLevel",
  //     "studyLevel",
  //     "openToOtherCountries",
  //     "previousVisa",
  //     "hasPassport",
  //     "hasVisaStamps",
  //     "openToConsultation",
  //   ];

  //   const newErrors: Record<string, string> = {};

  //   requiredFields.forEach((field) => {
  //     if (!formData[field]) {
  //       newErrors[field] = "This field is required.";
  //     }
  //   });

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length > 0) {
  //     toast({
  //       title: "Incomplete Form",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   try {
  //     const googleUrl =
  //       "https://script.google.com/macros/s/AKfycbylB5jb5S14PglhhFcEe_0AEeEFZLv3IGKH91BrJTYJzvtYsJM6In0-R8qqUuVHOmD6dA/exec";

  //     await fetch(googleUrl, {
  //       method: "POST",
  //       mode: "no-cors",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     toast({
  //       title: "Form Submitted Successfully!",
  //       description: "We’ve received your application!",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form", error);
  //     toast({
  //       title: "Submission failed",
  //       description: "Please try again later.",
  //       variant: "destructive",
  //     });
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting…");

    const requiredFields = [
      "gender",
      "educationLevel",
      "studyLevel",
      "openToOtherCountries",
      "previousVisa",
      "hasPassport",
      "hasVisaStamps",
      "openToConsultation",
    ];

    const newErrors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true); //  Start loading

      const googleUrl =
        "https://script.google.com/macros/s/AKfycbylB5jb5S14PglhhFcEe_0AEeEFZLv3IGKH91BrJTYJzvtYsJM6In0-R8qqUuVHOmD6dA/exec";

      await fetch(googleUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Form Submitted Successfully!",
        description: "We’ve received your application!",
      });

      resetForm(); //  Clear the form
      window.scrollTo({ top: 0, behavior: "smooth" }); // Optional scroll up
    } catch (error) {
      console.error("Error submitting form", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false); //  Stop loading
    }
  };
  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      whatsapp: "",
      age: "",
      gender: "",

      educationLevel: "",
      schoolName: "",
      courseOfStudy: "",
      cgpa: "",
      graduationYear: "",

      studyLevel: "",
      preferredField: "",
      startDate: "",
      preferredCountry: "",
      openToOtherCountries: "",
      otherCountries: "",

      sponsor: "",
      budgetRange: "",
      proofOfFunds: "",

      previousVisa: "",
      visaCountry: "",
      visaStatus: "",
      hasPassport: "",
      hasVisaStamps: "",
      stampCount: "",
      stampDetails: "",

      openToConsultation: "",
    });

    setErrors({});
    // setTouched({});
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12 gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-primary/10 transition-smooth"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-card border-0">
          <CardHeader className="text-center gradient-hero text-white rounded-t-xl">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-16 h-16" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Study Abroad Interest Form
            </CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Share your study abroad goals and let us help you achieve them
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Personal Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 1: Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">
                      WhatsApp Number (with country code) *
                    </Label>
                    <Input
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      placeholder="Your age"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <RadioGroup
                      name="gender"
                      required
                      value={formData.gender}
                      onValueChange={(value) => handleChange("gender", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="others" id="others" />
                        <Label htmlFor="others">Others</Label>
                      </div>
                    </RadioGroup>

                    {errors.gender && (
                      <p className="text-sm text-red-500">{errors.gender}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Education Background */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 2: Education Background
                </h3>

                <div className="space-y-2">
                  <Label>Highest Level of Education Completed *</Label>
                  <RadioGroup
                    name="educationLevel"
                    required
                    value={formData.educationLevel}
                    onValueChange={(value) => handleChange("educationLevel", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bachelor" id="bachelor" />
                      <Label htmlFor="bachelor">Bachelor’s</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="master" id="master" />
                      <Label htmlFor="master">Master’s</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phd" id="phd" />
                      <Label htmlFor="phd">PhD</Label>
                    </div>
                  </RadioGroup>
                  {errors.educationLevel && (
                    <p className="text-sm text-red-500">{errors.educationLevel}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School Graduated From *</Label>
                    <Input
                      id="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={(e) => handleChange("schoolName", e.target.value)}
                      placeholder="Name of institution"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="courseOfStudy">Course of Study / Major *</Label>
                    <Input
                      id="courseOfStudy"
                      required
                      value={formData.courseOfStudy}
                      onChange={(e) => handleChange("courseOfStudy", e.target.value)}
                      placeholder="e.g., Computer Science"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cgpa">CGPA or Grade</Label>
                    <Input
                      id="cgpa"
                      required
                      value={formData.cgpa}
                      onChange={(e) => handleChange("cgpa", e.target.value)}
                      placeholder="e.g., 3.5 or First Class"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Year of Graduation *</Label>
                    <Input
                      id="graduationYear"
                      required
                      value={formData.graduationYear}
                      onChange={(e) => handleChange("graduationYear", e.target.value)}
                      placeholder="e.g., 2023"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Study Plans */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 3: Study Plans
                </h3>

                <div className="space-y-2">
                  <Label>What level do you want to study abroad? *</Label>
                  <RadioGroup
                    name="studyLevel"
                    required
                    value={formData.studyLevel}
                    onValueChange={(value) => handleChange("studyLevel", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="undergraduate" id="undergraduate" />
                      <Label htmlFor="undergraduate">Undergraduate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="postgraduate" id="postgraduate" />
                      <Label htmlFor="postgraduate">Postgraduate</Label>
                    </div>
                  </RadioGroup>

                  {errors.studyLevel && (
                    <p className="text-sm text-red-500">{errors.studyLevel}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredField">
                      Preferred Course or Field of Interest *
                    </Label>
                    <Input
                      id="preferredField"
                      required
                      value={formData.preferredField}
                      onChange={(e) => handleChange("preferredField", e.target.value)}
                      placeholder="e.g., Nursing, Computer Science"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Preferred Start Date (Month/Year) *</Label>
                    <Input
                      id="startDate"
                      required
                      // type="date"
                      value={formData.startDate}
                      onChange={(e) => handleChange("startDate", e.target.value)}
                      placeholder="e.g., September 2026"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredCountry">Preferred Country *</Label>
                    <Input
                      id="preferredCountry"
                      required
                      value={formData.preferredCountry}
                      onChange={(e) => handleChange("preferredCountry", e.target.value)}
                      placeholder="e.g., Canada, UK, Australia"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Are you open to other country options? *</Label>
                  <RadioGroup
                    name="openToOtherCountries"
                    required
                    value={formData.openToOtherCountries}
                    onValueChange={(value) => handleChange("openToOtherCountries", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yesCountries" />
                      <Label htmlFor="yesCountries">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="noCountries" />
                      <Label htmlFor="noCountries">No</Label>
                    </div>
                  </RadioGroup>

                  {errors.openToOtherCountries && (
                    <p className="text-sm text-red-500">{errors.openToOtherCountries}</p>
                  )}
                </div>

                {formData.openToOtherCountries === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="otherCountries">
                      Other countries you're open to (up to 4)
                    </Label>
                    <Textarea
                      id="otherCountries"
                      value={formData.otherCountries}
                      onChange={(e) => handleChange("otherCountries", e.target.value)}
                      placeholder="List other countries..."
                    />
                  </div>
                )}
              </div>

              {/* Section 5: Visa and Travel Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 4: Visa and Travel Info
                </h3>

                <div className="space-y-2">
                  <Label>Have you ever applied for a visa before? *</Label>
                  <RadioGroup
                    name="previousVisa"
                    required
                    value={formData.previousVisa}
                    onValueChange={(value) => handleChange("previousVisa", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yesVisa" />
                      <Label htmlFor="yesVisa">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="noVisa" />
                      <Label htmlFor="noVisa">No</Label>
                    </div>
                  </RadioGroup>

                  {errors.previousVisa && (
                    <p className="text-sm text-red-500">{errors.previousVisa}</p>
                  )}
                </div>

                {formData.previousVisa === "yes" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="visaCountry">Which country did you apply to?</Label>
                      <Input
                        id="visaCountry"
                        required
                        value={formData.visaCountry}
                        onChange={(e) => handleChange("visaCountry", e.target.value)}
                        placeholder="Country name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Was it approved or denied?</Label>
                      <RadioGroup
                        value={formData.visaStatus}
                        name="visaStatus"
                        onValueChange={(value) => handleChange("visaStatus", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="approved" id="approved" />
                          <Label htmlFor="approved">Approved</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="denied" id="denied" />
                          <Label htmlFor="denied">Denied</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Do you have your international passport? *</Label>
                  <RadioGroup
                    name="hasPassport"
                    required
                    value={formData.hasPassport}
                    onValueChange={(value) => handleChange("hasPassport", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yesPassport" />
                      <Label htmlFor="yesPassport">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="noPassport" />
                      <Label htmlFor="noPassport">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Do you have any visa stamps on your passport? *</Label>
                  <RadioGroup
                    name="hasVisaStamps"
                    required
                    value={formData.hasVisaStamps}
                    onValueChange={(value) => handleChange("hasVisaStamps", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yesStamps" />
                      <Label htmlFor="yesStamps">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="noStamps" />
                      <Label htmlFor="noStamps">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.hasVisaStamps === "yes" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="stampCount">How many stamps?</Label>
                      <Input
                        id="stampCount"
                        type="number"
                        value={formData.stampCount}
                        onChange={(e) => handleChange("stampCount", e.target.value)}
                        placeholder="Number of stamps"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stampDetails">
                        List the countries and travel dates
                      </Label>
                      <Textarea
                        id="stampDetails"
                        value={formData.stampDetails}
                        onChange={(e) => handleChange("stampDetails", e.target.value)}
                        placeholder="e.g., USA - June 2023, UK - December 2022"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Section 5: Consultation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 5: Consultation & Follow-up
                </h3>

                <div className="space-y-2">
                  <Label>
                    Are you open for a paid consultation if we find a suitable school or
                    scholarship? *
                  </Label>
                  <RadioGroup
                    name="openToConsultation"
                    required
                    value={formData.openToConsultation}
                    onValueChange={(value) => handleChange("openToConsultation", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yesConsult" />
                      <Label htmlFor="yesConsult">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="noConsult" />
                      <Label htmlFor="noConsult">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Submit Button */}
              {/* <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="gradient-hero text-white px-12 py-6 text-lg shadow-card hover:shadow-xl transition-smooth"
                >
                  Submit Application
                </Button>
              </div> */}

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="gradient-hero text-white px-12 py-6 text-lg shadow-card hover:shadow-xl transition-smooth"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

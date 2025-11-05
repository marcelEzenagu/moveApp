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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create Google Form URL with pre-filled data
    // Replace with your actual Google Form ID
    const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

    toast({
      title: "Form Submitted Successfully!",
      description:
        "We'll review your application and get back to you within 24-48 hours.",
    });

    // In production, you would redirect to Google Form or submit via API
    console.log("Form Data:", formData);
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
                    <Label>Gender (Optional)</Label>
                    <RadioGroup
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
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Prefer not to say</Label>
                      </div>
                    </RadioGroup>
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
                    value={formData.educationLevel}
                    onValueChange={(value) => handleChange("educationLevel", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="secondary" id="secondary" />
                      <Label htmlFor="secondary">Secondary / High School</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ond" id="ond" />
                      <Label htmlFor="ond">OND / Diploma</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bachelors" id="bachelors" />
                      <Label htmlFor="bachelors">Bachelor's Degree</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="masters" id="masters" />
                      <Label htmlFor="masters">Master's Degree</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="edu-other" id="edu-other" />
                      <Label htmlFor="edu-other">Other</Label>
                    </div>
                  </RadioGroup>
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
                    value={formData.studyLevel}
                    onValueChange={(value) => handleChange("studyLevel", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="undergraduate" id="undergraduate" />
                      <Label htmlFor="undergraduate">
                        Undergraduate (BSc, Nursing, etc.)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="postgraduate" id="postgraduate" />
                      <Label htmlFor="postgraduate">
                        Postgraduate (Master's, MBA, MSc, etc.)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shortcourse" id="shortcourse" />
                      <Label htmlFor="shortcourse">Short Course / Diploma</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="language" id="language" />
                      <Label htmlFor="language">Language Course</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="study-other" id="study-other" />
                      <Label htmlFor="study-other">Other</Label>
                    </div>
                  </RadioGroup>
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
                    value={formData.openToOtherCountries}
                    onValueChange={(value) => handleChange("openToOtherCountries", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="open-yes" />
                      <Label htmlFor="open-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="open-no" />
                      <Label htmlFor="open-no">No</Label>
                    </div>
                  </RadioGroup>
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

              {/* Section 4: Financial Preparation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 4: Financial Preparation
                </h3>

                <div className="space-y-2">
                  <Label>Who will sponsor your studies? *</Label>
                  <RadioGroup
                    value={formData.sponsor}
                    onValueChange={(value) => handleChange("sponsor", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="family" id="family" />
                      <Label htmlFor="family">Parents / Family</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self">Self-funded</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scholarship" id="scholarship" />
                      <Label htmlFor="scholarship">Scholarship</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="loan" id="loan" />
                      <Label htmlFor="loan">Student Loan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="combination" id="combination" />
                      <Label htmlFor="combination">Combination of the above</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Estimated budget range for tuition & living (per year) *</Label>
                  <RadioGroup
                    value={formData.budgetRange}
                    onValueChange={(value) => handleChange("budgetRange", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under5k" id="under5k" />
                      <Label htmlFor="under5k">Under $5,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5-10k" id="5-10k" />
                      <Label htmlFor="5-10k">$5,000–$10,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10-20k" id="10-20k" />
                      <Label htmlFor="10-20k">$10,000–$20,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over20k" id="over20k" />
                      <Label htmlFor="over20k">Over $20,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="notsure" id="notsure" />
                      <Label htmlFor="notsure">Not sure yet</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>
                    Do you have proof of funds or sponsor's statement ready? *
                  </Label>
                  <RadioGroup
                    value={formData.proofOfFunds}
                    onValueChange={(value) => handleChange("proofOfFunds", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="proof-yes" />
                      <Label htmlFor="proof-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="proof-no" />
                      <Label htmlFor="proof-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inprocess" id="inprocess" />
                      <Label htmlFor="inprocess">In process</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Section 5: Visa and Travel Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 5: Visa and Travel Info
                </h3>

                <div className="space-y-2">
                  <Label>Have you ever applied for a visa before? *</Label>
                  <RadioGroup
                    value={formData.previousVisa}
                    onValueChange={(value) => handleChange("previousVisa", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="visa-yes" />
                      <Label htmlFor="visa-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="visa-no" />
                      <Label htmlFor="visa-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.previousVisa === "yes" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="visaCountry">Which country did you apply to?</Label>
                      <Input
                        id="visaCountry"
                        value={formData.visaCountry}
                        onChange={(e) => handleChange("visaCountry", e.target.value)}
                        placeholder="Country name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Was it approved or denied?</Label>
                      <RadioGroup
                        value={formData.visaStatus}
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
                    value={formData.hasPassport}
                    onValueChange={(value) => handleChange("hasPassport", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="passport-yes" />
                      <Label htmlFor="passport-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="passport-no" />
                      <Label htmlFor="passport-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Do you have any visa stamps on your passport? *</Label>
                  <RadioGroup
                    value={formData.hasVisaStamps}
                    onValueChange={(value) => handleChange("hasVisaStamps", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="stamps-yes" />
                      <Label htmlFor="stamps-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="stamps-no" />
                      <Label htmlFor="stamps-no">No</Label>
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

              {/* Section 6: Consultation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                  Section 6: Consultation & Follow-up
                </h3>

                <div className="space-y-2">
                  <Label>
                    Are you open for a paid consultation if we find a suitable school or
                    scholarship? *
                  </Label>
                  <RadioGroup
                    value={formData.openToConsultation}
                    onValueChange={(value) => handleChange("openToConsultation", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="consult-yes" />
                      <Label htmlFor="consult-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="consult-no" />
                      <Label htmlFor="consult-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="gradient-hero text-white px-12 py-6 text-lg shadow-card hover:shadow-xl transition-smooth"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

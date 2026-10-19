/** Grouped, customer-facing business types for every Essential Solutions intake form.
 * Keep these labels human readable: the selected string is sent to HighLevel as `industry`.
 */
export const businessIndustries = [
  { group: "Home services & skilled trades", items: [
    "General contractor & remodeling", "Plumbing & drain services", "Electrical contractor", "HVAC, heating & cooling", "Roofing & gutters", "Painting & drywall", "Flooring & tile", "Carpentry & cabinetry", "Handyman services", "Landscaping & lawn care", "Tree care & arborist", "House cleaning & maid service", "Commercial cleaning & janitorial", "Pest control", "Pool & hot tub services", "Window & door installation", "Garage door services", "Appliance repair", "Pressure washing", "Junk removal & hauling", "Moving & storage", "Home security & alarm installation", "Solar installation & maintenance",
  ] },
  { group: "Beauty, grooming & personal wellness", items: [
    "Hair salon & hairstylist", "Barbershop", "Nail salon", "Lash & brow studio", "Esthetics & skincare", "Makeup artist", "Massage therapy", "Day spa", "Med spa & aesthetic services", "Tattoo & piercing studio", "Personal trainer & fitness coaching", "Gym or fitness studio", "Yoga or Pilates studio", "Wellness & holistic services",
  ] },
  { group: "Automotive & transportation", items: [
    "Auto repair & mechanic", "Auto body & collision repair", "Car detailing", "Car wash", "Tire & wheel shop", "Oil change & quick service", "Vehicle wraps & tinting", "Towing & roadside assistance", "Mobile mechanic", "Driving school", "Transportation & chauffeur service",
  ] },
  { group: "Health & care appointments", items: [
    "Dental office", "Chiropractic clinic", "Physical therapy practice", "Optometry & eye care", "Mental health & counseling practice", "Home care & senior services", "Nutrition & dietitian services", "Other health or care practice",
  ] },
  { group: "Professional & business services", items: [
    "Accounting & bookkeeping", "Tax preparation", "Legal services & law firm", "Insurance agency", "Financial planning", "Business consulting", "Business coaching", "IT support & managed services", "Marketing & advertising agency", "Graphic design & creative studio", "Web design & development", "Recruiting & staffing agency", "Notary & document services",
  ] },
  { group: "Real estate & property", items: [
    "Real estate agent or brokerage", "Property management", "Home inspection", "Home staging", "Commercial property services", "Short-term rental management", "Real estate photography",
  ] },
  { group: "Events, weddings & hospitality", items: [
    "Wedding & event planning", "Event venue", "Catering business", "Photography studio", "Videography & production", "DJ & entertainment services", "Florist & event décor", "Restaurant & café", "Food truck & mobile catering", "Hotel, inn & lodging", "Travel agency",
  ] },
  { group: "Education, family & personal services", items: [
    "Tutoring & academic coaching", "Music lessons", "Dance studio", "Art & creative classes", "Language school", "Childcare & daycare", "Summer camp & youth programs", "Personal concierge", "Tailoring & alterations", "Laundry & dry cleaning",
  ] },
  { group: "Pets & animal care", items: [
    "Pet grooming", "Dog training", "Pet boarding & daycare", "Dog walking & pet sitting", "Veterinary clinic",
  ] },
  { group: "Retail, specialty & equipment services", items: [
    "Phone & electronics repair", "Computer repair", "Furniture & upholstery services", "Printing & signage", "Equipment rental", "Equipment installation & service", "Specialty retail shop", "Other appointment-based retail service",
  ] },
] as const;
export const OTHER_BUSINESS_TYPE = "Other — describe my business";

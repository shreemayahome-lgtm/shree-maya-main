const bedLinen = [
  // FABRIC TYPES – STRIPE (Bedsheets)
    {
      id: "bs-stripe-250",
      title: "Satin Stripe 250TC Bedsheet",
      description: "100% Cotton • 250TC • Stripe Weave",
      sizes: ["60×90", "90×100", "108×108"],
      type: "bedsheet",
      collection: "stripe",
  
      // default images (fallback)
      images: ["/blue1.webp"],
  
      // ✅ NEW COLORS DATA
      colors: [
        {
          name: "blue",
          code: "#1E3A8A",
          images: [
            "/blue1.webp",
            
            
          ],
        },
        {
          name: "olive",
          code: "#5A7D4D",
          images: [
            "/olive.webp",

          ],
        },
        {
          name: "coral",
          code: "#F2AFA3",
          images: [
            "/coral.webp",

          ],
        },
        {
          name: "sky blue",
          code: "#6EC1E4",
          images: [
            "/skyblue.webp",

          ],
        },
        {
          name: "black",
          code: "#2B2B2B",
          images: [
            "/black.webp",

          ],
        },
      ],
    },
  {
    id: "bs-stripe-300",
    title: "Satin Stripe 300TC Bedsheet",
    description: "100% Cotton • 300TC • Stripe Weave",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/stripe300-1.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
    type: "bedsheet",
    collection: "stripe",
  },
  {
    id: "bs-stripe-400",
    title: "Satin Stripe 400TC Bedsheet",
    description: "100% Cotton • 400TC • Stripe Weave",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/plain230TC.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
    type: "bedsheet",
    collection: "stripe",
  },
  {
    id: "bs-stripe-500",
    title: "Satin Stripe 500TC Bedsheet",
    description: "100% Cotton • 500TC • Stripe Weave",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/plain230TC.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
    type: "bedsheet",
    collection: "stripe",
  },
  // Pollycotton bedsheet

  {
    id: "bs-stripe-220",
    title: "Pollycotton Stripe 220TC Bedsheet",
    description: "Pollycotton • 250TC • Stripe Weave",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/placeholder2.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
    type: "bedsheet",
    collection: "stripe",
  },
  {
    id: "bs-stripe-302",
    title: "Pollycotton Stripe 300TC Bedsheet",
    description: "300TC • Pollycotton • Stripe Weave",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/stripe300-1.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
    type: "bedsheet",
    collection: "stripe",
  },

  // FABRIC TYPES – PLAIN (Bedsheets)
  
  {
    id: "bs-plain-301",
    title: "Percale Plain 300TC Bedsheet",
    description: "300TC • 100% Cotton • Plain Weave",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/plain300.webp", "/peracle-3.webp", "/peracle-2.webp"],
    type: "bedsheet",
    collection: "plain",
  },
  {
    id: "bs-plain-400",
    title: "Peracle Plain 400TC Bedsheet",
    description: "400TC • 100% Cotton • Peracle Plain",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/plain400.webp", "/satinCloth.webp"],
    type: "bedsheet",
    collection: "plain",
  },
  {
    id: "bs-plain-500",
    title: "Peracle Plain 500TC Bedsheet",
    description: "500TC • 100% Cotton • Peracle Plain",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/plain500.webp", "/satinCloth.webp"],
    type: "bedsheet",
    collection: "plain",
  },

  //Glace cotton bedsheets 
{
  id: "bs-glaceplain-220",
  title: "Glace Cotton Plain 220TC Bedsheet",
  description: "300TC • Glace Cotton • Plain Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain300.webp", "/peracle-3.webp", "/peracle-2.webp"],
  type: "bedsheet",
  collection: "plain",
},
{
  id: "bs-plain-302",
  title: "Glace Cotton Plain 300TC Bedsheet",
  description: "400TC • Glace Cotton • Peracle Plain",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain400.webp", "/satinCloth.webp"],
  type: "bedsheet",
  collection: "plain",
},


  // PILLOW COVERS — STRIPE
  {
    id: "pc-stripe-250",
    title: "Stripe 250TC Pillow Cover",
    description: "250TC • 100% Cotton • Stripe Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-stripe-220-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "stripe",
  },
  
  {
    id: "pc-stripe-309",
    title: "Stripe 300TC Pillow Cover",
    description: "300TC • 100% Cotton • Stripe Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-stripe-300-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "stripe",
  },
  {
    id: "pc-stripe-400",
    title: "Stripe 400TC Pillow Cover",
    description: "400TC • 100% Cotton • Stripe Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-stripe-400-1.jpg","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "stripe",
  },
  {
    id: "pc-stripe-500",
    title: "Stripe 500TC Pillow Cover",
    description: "500TC • 100% Cotton • Stripe Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-stripe-250-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "stripe",
  },

  // Pollycotton Pillow covers

  {
    id: "bs-stripe-220",
    title: "Pollycotton Stripe 220TC Pillow Cover",
    description: "250TC • Pollycotton • Stripe Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-stripe-220-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "stripe",
  },
  {
    id: "bs-stripe-304",
    title: "Pollycotton Stripe 300TC Pillow Cover",
    description: "300TC • Pollycotton • Stripe Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-stripe-300-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "stripe",
  },
  // PILLOW COVERS — PLAIN
  
  {
    id: "pc-plain-310",
    title: "Plain 300TC Pillow Cover",
    description: "300TC • 100% Cotton • Plain Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-plain-300-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "plain",
  },
  {
    id: "pc-plain-400",
    title: "Plain 400TC Pillow Cover",
    description: "400TC • 100% Cotton • Peracle Plain",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-plain-400-1.webp", "/pillow-plain-400-2.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "plain",
  },
  {
    id: "pc-plain-500",
    title: "Plain 500TC Pillow Cover",
    description: "500TC • 100% Cotton • Peracle Plain",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-plain-500-1.webp", "/pillow-plain-500-2.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "plain",
  },
  //glace cotton pillowcase 
  {
    id: "pcg-plain-220",
    title: "Glace Cotton Plain 220TC Pillow Cover",
    description: "220TC • Glace Cotton • Plain Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-plain-220-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "plain",
  },
  {
    id: "pcg-plain-320",
    title: "Glace Cotton Plain 300TC Pillow Cover",
    description: "300TC • Glace Cotton • Plain Weave",
    sizes: ["16×24", "18×28","20×30",],
    images: ["/pillow-plain-300-1.webp","/PC.jpg","/PILLOWSIZE.png"],
    type: "pillowcase",
    collection: "plain",
  },

  
//Duvetcovers stripe

{
  id: "bs-stripe-250",
  title: "Satin Stripe 250TC Duvet Cover",
  description: "250TC • 100% Cotton • Stripe Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/placeholder2.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
  type: "duvet-cover",
  collection: "stripe",
},
{
  id: "bs-stripe-301",
  title: "Satin Stripe 300TC Duvet Cover",
  description: "300TC • 100% Cotton • Stripe Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/stripe300-1.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
  type: "duvet-cover",
  collection: "stripe",
},
{
  id: "bs-stripe-400",
  title: "Satin Stripe 400TC Duvet Cover",
  description: "400TC • 100% Cotton • Stripe Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain230TC.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
  type: "duvet-cover",
  collection: "stripe",
},
{
  id: "bs-stripe-500",
  title: "Satin Stripe 500TC Duvet Cover",
  description: "500TC • 100% Cotton • Stripe Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain230TC.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
  type: "duvet-cover",
  collection: "stripe",
},

// pollycotton Duvet COvers 
{
  id: "bs-stripe-220",
  title: "Pollycotton Stripe 220TC Duvet Cover",
  description: "250TC • Pollycotton • Stripe Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/placeholder2.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
  type: "duvet-cover",
  collection: "stripe",
},
{
  id: "bs-stripe-302",
  title: "Pollycotton Stripe 300TC Duvet Cover",
  description: "300TC • Pollycotton • Stripe Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/stripe300-1.webp", "/stripecloth-2.webp", "/stripecloth.webp"],
  type: "duvet-cover",
  collection: "stripe",
},

//Duvet covers Plain

{
  id: "bs-plain-304",
  title: "Percale Plain 300TC Duvet Cover",
  description: "300TC • 100% Cotton • Plain Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain300.webp", "/peracle-3.webp", "/peracle-2.webp"],
  type: "duvet-cover",
  collection: "plain",
},
{
  id: "bs-plain-400",
  title: "Peracle Plain 400TC Duvet Cover",
  description: "400TC • 100% Cotton • Peracle Plain",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain400.webp", "/satinCloth.webp"],
  type: "duvet-cover",
  collection: "plain",
},
{
  id: "bs-plain-500",
  title: "Peracle Plain 500TC Duvet Cover",
  description: "500TC • 100% Cotton • Peracle Plain",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain500.webp", "/satinCloth.webp"],
  type: "duvet-cover",
  collection: "plain",
},
//Glace cotton duvet covers 
{
  id: "bs-plain-200",
  title: "Glace Cotton Plain 220TC Duvet Cover",
  description: "300TC • Glace Cotton • Plain Weave",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain300.webp", "/peracle-3.webp", "/peracle-2.webp"],
  type: "duvet-cover",
  collection: "plain",
},
{
  id: "bs-plain-306",
  title: "Glace Cotton Plain 300TC Duvet Cover",
  description: "400TC • Glace Cotton • Peracle Plain",
  sizes: ["60×90", "90×100", "108×108"],
  images: ["/plain400.webp", "/satinCloth.webp"],
  type: "duvet-cover",
  collection: "plain",
},

// PILLOWS
{
  id: "pillow-conjugate",
  title: "Premium Conjugate Fibre Pillow",
  description: "Firm support • Conjugate fibre fill",
  sizes: ["16×24", "18×28","20×30",],
  images: ["/pillow-conjugate-1.webp"],
  type: "pillow",
},
{
  id: "pillow-micro",
  title: "Premium Micro Fibre Pillow",
  description: "Soft comfort • Down-like micro fill",
  sizes: ["16×24", "18×28","20×30",],
  images: ["/pillow-micro-1.webp"],
  type: "pillow",
},
  // QUILT COVERS (Duvets section)
  {
    id: "duvet-conjugate",
    title: "Conjugate Fibre Quilt",
    description: "Warm & breathable • All-season comfort",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/quilt-conjugate-1.webp", "/quilt-conjugate-2.webp"],
    type: "duvet",
  },
  {
    id: "duvet-micro",
    title: "Micro Fibre Quilt",
    description: "Ultra soft & hypoallergenic • All-season",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/quilt-micro-1.webp", "/quilt-micro-2.webp"],
    type: "duvet",
  },
];

export default bedLinen;
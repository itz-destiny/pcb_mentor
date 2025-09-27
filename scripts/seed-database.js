import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Sample data based on your existing mock data
const blogPosts = [
  {
    title: "5 Smart Ways to Kickstart Your Electronics Engineering Career",
    slug: "kickstart-electronics-engineering-career",
    excerpt: "Feeling stuck or unsure where to begin? These five practical tips will help you build direction, confidence, and traction as a beginner engineer.",
    content: `# 5 Smart Ways to Kickstart Your Electronics Engineering Career

Feeling stuck or unsure where to begin? These five practical tips will help you build direction, confidence, and traction as a beginner engineer.

## 1. Start with Fundamentals

Before diving into complex projects, ensure you have a solid foundation in:
- Basic circuit theory
- Ohm's law and Kirchhoff's laws
- Component identification and behavior
- Breadboard prototyping

## 2. Build Practical Projects

Nothing beats hands-on experience. Start with simple projects like:
- LED circuits
- Basic amplifiers
- Simple oscillators
- Power supplies

## 3. Learn Industry Tools

Familiarize yourself with essential software:
- PCB design tools (KiCad, Eagle)
- Simulation software (LTSpice, Multisim)
- Programming languages (C, Python)
- Version control (Git)

## 4. Join Communities

Connect with other engineers:
- Online forums (Reddit r/electronics)
- Local maker spaces
- Professional organizations
- Mentorship programs

## 5. Document Your Journey

Keep track of your progress:
- Project portfolios
- Learning logs
- Code repositories
- Video tutorials

Remember, every expert was once a beginner. Stay curious, keep building, and don't be afraid to make mistakes!`,
    image: "/M1.png",
    published: true,
    featured: true,
    tags: ["career", "electronics", "beginner"],
    views: 1234,
    publish_date: "2024-01-15T00:00:00Z"
  },
  {
    title: "Top 3 Free PCB Design Tools for Beginners (And How to Use Them)",
    slug: "free-pcb-design-tools-beginners",
    excerpt: "Start designing today with these beginner-friendly tools. This guide walks you through setup, workflow, and key features to try.",
    content: `# Top 3 Free PCB Design Tools for Beginners

Start designing today with these beginner-friendly tools. This guide walks you through setup, workflow, and key features to try.

## 1. KiCad

**Best for:** Complete beginners and professionals

KiCad is a powerful, open-source PCB design suite that's completely free. It includes:
- Schematic capture
- PCB layout
- 3D viewer
- Gerber file generation

### Getting Started:
1. Download from kicad.org
2. Install component libraries
3. Start with the tutorial projects
4. Join the KiCad community forums

## 2. EasyEDA

**Best for:** Web-based design and collaboration

EasyEDA runs in your browser and offers:
- Cloud-based design
- Component library
- Simulation capabilities
- Direct ordering from JLCPCB

### Getting Started:
1. Create a free account
2. Explore the example projects
3. Use the built-in tutorials
4. Start with simple circuits

## 3. Fritzing

**Best for:** Learning and documentation

Fritzing is perfect for beginners because:
- Visual breadboard view
- Easy component placement
- Great for learning
- Excellent documentation features

### Getting Started:
1. Download from fritzing.org
- Start with breadboard view
- Learn component connections
- Move to schematic view
- Export to PCB layout

## Tips for Success:
- Start with simple projects
- Learn one tool thoroughly
- Practice regularly
- Join online communities
- Don't be afraid to experiment

Remember, the best tool is the one you'll actually use consistently!`,
    image: "/M2.png",
    published: true,
    featured: false,
    tags: ["PCB", "tools", "beginner"],
    views: 856,
    publish_date: "2024-01-10T00:00:00Z"
  },
  {
    title: "From Doubt to Confidence: The Engineer's Mindset Shift",
    slug: "engineer-mindset-shift-confidence",
    excerpt: "Imposter syndrome is real — but beatable. Learn the mindset shifts that helped me go from self-doubt to building my first real project.",
    content: `# From Doubt to Confidence: The Engineer's Mindset Shift

Imposter syndrome is real — but beatable. Learn the mindset shifts that helped me go from self-doubt to building my first real project.

## The Imposter Syndrome Trap

Many engineers struggle with:
- Feeling like they don't belong
- Comparing themselves to others
- Fear of making mistakes
- Perfectionism paralysis

## Mindset Shifts That Changed Everything

### 1. Embrace the Learning Process

Instead of: "I should already know this"
Think: "I'm learning something new"

### 2. Reframe Mistakes as Data

Instead of: "I failed"
Think: "I learned what doesn't work"

### 3. Focus on Progress, Not Perfection

Instead of: "This isn't perfect"
Think: "This is better than yesterday"

### 4. Celebrate Small Wins

Instead of: "It's just a simple circuit"
Think: "I built something that works!"

## Practical Steps to Build Confidence

1. **Start Small**: Begin with simple projects
2. **Document Success**: Keep a success journal
3. **Find Mentors**: Connect with experienced engineers
4. **Join Communities**: Share your journey
5. **Teach Others**: Explain what you've learned

## The Confidence Cycle

Confidence comes from competence, which comes from practice, which comes from action. Start the cycle today!

Remember: Every expert was once a beginner. Your journey matters, and your progress is valid.`,
    image: "/M5.png",
    published: false,
    featured: false,
    tags: ["mindset", "confidence", "psychology"],
    views: 567,
    publish_date: null
  },
  {
    title: "Build Your First Circuit: Blinking LED with a 555 Timer",
    slug: "blinking-led-555-timer",
    excerpt: "An easy, beginner-friendly project that introduces you to timers, breadboards, and fun hands-on learning with real results.",
    content: `# Build Your First Circuit: Blinking LED with a 555 Timer

An easy, beginner-friendly project that introduces you to timers, breadboards, and fun hands-on learning with real results.

## What You'll Learn

- How to use a 555 timer IC
- Breadboard prototyping
- Basic circuit analysis
- Component selection

## Components Needed

- 1x 555 timer IC
- 1x LED (any color)
- 2x Resistors (1kΩ and 10kΩ)
- 1x Capacitor (10µF)
- Breadboard
- Jumper wires
- 9V battery and connector

## Step-by-Step Instructions

### 1. Set Up the Breadboard
- Place the 555 timer in the breadboard
- Connect power rails

### 2. Connect the Components
- Follow the schematic carefully
- Double-check connections
- Use different colored wires for clarity

### 3. Power Up and Test
- Connect the battery
- Watch the LED blink!
- Adjust timing if needed

## Understanding the Circuit

The 555 timer works as an astable multivibrator, creating a continuous square wave that turns the LED on and off.

## Troubleshooting Tips

- Check all connections
- Verify component values
- Ensure proper power supply
- Test components individually

## Next Steps

Once you've mastered this circuit, try:
- Changing the blink rate
- Adding multiple LEDs
- Building a more complex timer
- Designing your own variations

This project is your gateway to more complex electronics!`,
    image: "/M3.png",
    published: true,
    featured: false,
    tags: ["circuit", "555", "beginner", "LED"],
    views: 432,
    publish_date: "2024-01-08T00:00:00Z"
  },
  {
    title: "Avoid These 7 Common PCB Layout Mistakes",
    slug: "common-pcb-layout-mistakes",
    excerpt: "Bad traces, noisy power lines, wrong footprints — learn how to avoid rookie errors in your next PCB layout with this checklist.",
    content: `# Avoid These 7 Common PCB Layout Mistakes

Bad traces, noisy power lines, wrong footprints — learn how to avoid rookie errors in your next PCB layout with this checklist.

## 1. Insufficient Trace Width

**Problem:** Traces too narrow for current
**Solution:** Use trace width calculators
**Rule:** 1oz copper = 1A per 0.4mm width

## 2. Poor Ground Plane Design

**Problem:** Disconnected ground areas
**Solution:** Maintain continuous ground plane
**Rule:** Keep ground return paths short

## 3. Inadequate Power Distribution

**Problem:** Voltage drops and noise
**Solution:** Use power planes and decoupling caps
**Rule:** Place caps close to ICs

## 4. Wrong Component Footprints

**Problem:** Parts don't fit
**Solution:** Verify footprints before layout
**Rule:** Always check datasheets

## 5. Insufficient Clearance

**Problem:** Short circuits and arcing
**Solution:** Follow clearance rules
**Rule:** Minimum 0.2mm for low voltage

## 6. Poor Thermal Management

**Problem:** Overheating components
**Solution:** Add thermal vias and pads
**Rule:** Consider heat dissipation paths

## 7. Ignoring Manufacturing Constraints

**Problem:** Board can't be manufactured
**Solution:** Check design rules
**Rule:** Follow manufacturer guidelines

## Design Checklist

Before sending to manufacturing:
- [ ] Trace widths adequate
- [ ] Ground plane continuous
- [ ] Power distribution solid
- [ ] Footprints verified
- [ ] Clearances sufficient
- [ ] Thermal paths considered
- [ ] Manufacturing rules followed

## Tools to Help

- Design rule checkers
- Trace width calculators
- Thermal analysis tools
- Manufacturing guidelines

Remember: Good PCB design is about planning, not just placing components!`,
    image: "/M4.png",
    published: true,
    featured: false,
    tags: ["PCB", "layout", "design", "mistakes"],
    views: 789,
    publish_date: "2024-01-05T00:00:00Z"
  }
];

const materials = [
  {
    title: "PCB Design Beginner Guide",
    description: "A comprehensive PDF guide for starting your PCB design journey. Covers everything from basic concepts to advanced techniques.",
    type: "PDF",
    file_url: "#", // Will be updated when files are uploaded
    file_name: "pcb-design-beginner-guide.pdf",
    file_size: 2048576, // 2MB
    image_url: "/material1.png",
    preview_url: "/preview1.jpg",
    downloads: 234
  },
  {
    title: "Circuit Simulation Cheat Sheet",
    description: "Quick reference guide for circuit simulation tools and techniques. Perfect for beginners learning LTSpice and Multisim.",
    type: "PDF",
    file_url: "#",
    file_name: "circuit-simulation-cheat-sheet.pdf",
    file_size: 1024000, // 1MB
    image_url: "/material2.png",
    preview_url: "/preview2.jpg",
    downloads: 189
  },
  {
    title: "Starter Project Templates",
    description: "Downloadable templates for your first electronics projects. Includes schematics, PCB layouts, and component lists.",
    type: "ZIP",
    file_url: "#",
    file_name: "starter-project-templates.zip",
    file_size: 5120000, // 5MB
    image_url: "/material3.png",
    preview_url: "/preview3.jpg",
    downloads: 156
  },
  {
    title: "Component Reference Guide",
    description: "Complete reference for common electronic components, their symbols, and typical applications.",
    type: "PDF",
    file_url: "#",
    file_name: "component-reference-guide.pdf",
    file_size: 3072000, // 3MB
    image_url: "/material4.png",
    preview_url: "/preview4.jpg",
    downloads: 98
  },
  {
    title: "PCB Manufacturing Checklist",
    description: "Essential checklist to ensure your PCB designs are ready for manufacturing. Avoid common mistakes and delays.",
    type: "PDF",
    file_url: "#",
    file_name: "pcb-manufacturing-checklist.pdf",
    file_size: 512000, // 512KB
    image_url: "/material5.png",
    preview_url: "/preview5.jpg",
    downloads: 167
  }
];

const videos = [
  {
    title: "PCB Design Tutorial for Beginners",
    description: "Learn the basics of PCB design from scratch. This comprehensive tutorial covers everything you need to know to get started.",
    video_id: "MsdJgEinb34",
    thumbnail: "https://img.youtube.com/vi/MsdJgEinb34/maxresdefault.jpg",
    category: "Tutorial",
    views: 15420,
    duration: "15:30"
  },
  {
    title: "Circuit Analysis with LTSpice",
    description: "Master circuit simulation using LTSpice. Learn how to analyze circuits, run simulations, and interpret results.",
    video_id: "ABC123DEF456",
    thumbnail: "https://img.youtube.com/vi/ABC123DEF456/maxresdefault.jpg",
    category: "Advanced",
    views: 8934,
    duration: "22:15"
  },
  {
    title: "Building Your First Power Supply",
    description: "Step-by-step guide to building a simple linear power supply. Perfect for beginners wanting hands-on experience.",
    video_id: "XYZ789GHI012",
    thumbnail: "https://img.youtube.com/vi/XYZ789GHI012/maxresdefault.jpg",
    category: "Project",
    views: 12356,
    duration: "18:45"
  },
  {
    title: "Component Selection Guide",
    description: "Learn how to choose the right components for your projects. Covers resistors, capacitors, ICs, and more.",
    video_id: "DEF456GHI789",
    thumbnail: "https://img.youtube.com/vi/DEF456GHI789/maxresdefault.jpg",
    category: "Tutorial",
    views: 6789,
    duration: "12:20"
  },
  {
    title: "PCB Layout Best Practices",
    description: "Professional tips for PCB layout design. Learn how to create clean, efficient, and manufacturable designs.",
    video_id: "GHI789JKL012",
    thumbnail: "https://img.youtube.com/vi/GHI789JKL012/maxresdefault.jpg",
    category: "Advanced",
    views: 9876,
    duration: "25:10"
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Insert blog posts
    console.log('📝 Inserting blog posts...');
    const { data: blogData, error: blogError } = await supabase
      .from('blog_posts')
      .insert(blogPosts)
      .select();

    if (blogError) {
      console.error('Error inserting blog posts:', blogError);
    } else {
      console.log(`✅ Inserted ${blogData.length} blog posts`);
    }

    // Insert materials
    console.log('📁 Inserting materials...');
    const { data: materialsData, error: materialsError } = await supabase
      .from('materials')
      .insert(materials)
      .select();

    if (materialsError) {
      console.error('Error inserting materials:', materialsError);
    } else {
      console.log(`✅ Inserted ${materialsData.length} materials`);
    }

    // Insert videos
    console.log('🎥 Inserting videos...');
    const { data: videosData, error: videosError } = await supabase
      .from('videos')
      .insert(videos)
      .select();

    if (videosError) {
      console.error('Error inserting videos:', videosError);
    } else {
      console.log(`✅ Inserted ${videosData.length} videos`);
    }

    console.log('🎉 Database seeding completed successfully!');
    
    // Display summary
    console.log('\n📊 Summary:');
    console.log(`- Blog posts: ${blogData?.length || 0}`);
    console.log(`- Materials: ${materialsData?.length || 0}`);
    console.log(`- Videos: ${videosData?.length || 0}`);

  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();

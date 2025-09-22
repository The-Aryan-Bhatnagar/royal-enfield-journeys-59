import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Royal Heritage Colors
        "royal-blue": "hsl(var(--royal-blue))",
        "royal-gold": "hsl(var(--royal-gold))",
        "royal-burgundy": "hsl(var(--royal-burgundy))",
        "royal-cream": "hsl(var(--royal-cream))",
        
        // Adventure Colors  
        "adventure-copper": "hsl(var(--adventure-copper))",
        "adventure-leather": "hsl(var(--adventure-leather))",
        "adventure-dust": "hsl(var(--adventure-dust))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "bike-ride": {
          "0%": { 
            left: "-50px", 
            transform: "translateY(-50%) translateX(0) rotate(0deg)" 
          },
          "25%": { 
            transform: "translateY(-60%) translateX(0) rotate(-2deg)" 
          },
          "50%": { 
            left: "50%", 
            transform: "translateY(-50%) translateX(-50%) rotate(0deg)" 
          },
          "75%": { 
            transform: "translateY(-40%) translateX(-50%) rotate(2deg)" 
          },
          "100%": { 
            left: "calc(100% + 50px)", 
            transform: "translateY(-50%) translateX(0) rotate(0deg)" 
          },
        },
        "dash": {
          "0%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "30" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bikeRide": "bike-ride 12s ease-in-out infinite",
        "dash": "dash 8s linear infinite",
      },
      backgroundImage: {
        'gradient-royal': 'var(--gradient-royal)',
        'gradient-adventure': 'var(--gradient-adventure)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-dark': 'var(--gradient-dark)',
      },
      boxShadow: {
        'royal': 'var(--shadow-royal)',
        'adventure': 'var(--shadow-adventure)',
        'glow': 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

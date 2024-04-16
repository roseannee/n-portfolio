import {
  Grape_Nuts as FontLogo,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google"

// Arizonia
// La_Belle_Aurore
// Meddon
// Libre_Barcode_128_Text
// Ceviche_One
// Grape_Nuts
// Lavishly_Yours
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontLogo = FontLogo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
})

import { definePackage } from "@humansandmachines/gsv/sdk";

export default definePackage({
  meta: {
    displayName: "Starfield",
    description: "ASCII starfield flight demo.",
    icon: "ui/starfield-icon.svg",
    window: {
      width: 1220,
      height: 820,
      minWidth: 720,
      minHeight: 480,
    },
    capabilities: {
      kernel: ["proc.spawn", "proc.send", "proc.kill", "proc.history"],
    },
  },
  browser: {
    entry: "./src/ascii-starfield-main.ts",
    assets: ["./src/ascii-starfield.css"],
  },
});

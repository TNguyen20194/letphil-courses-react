import "./App.css";
import { Header } from "./components/header";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Navigation } from "lucide-react";

/**
 * 1. Create 2 separate component files
 * 2. Move html over into the components
 * 3. Import them into App.tsx to render
 */

function App() {
  const cards = [
    {
      title: "Become a Dasher",
      description:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      Icon: Navigation,
      button: "Start earning",
    },
    {
      title: "Become a Merchant",
      description:
        "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.",
      Icon: Navigation,
      button: "Sign up for DoorDash",
    },
    {
      title: "Get the best DoorDash experience",
      description:
        "Experience the best your neighborhood has to offer, all in one app.",
      Icon: Navigation,
      button: "Get the app",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header />
      <div className="flex flex-col justify-center items-center gap-8">
        {cards.map((card) => (
          <Card
            title={card.title}
            description={card.description}
            Icon={card.Icon}
            button={card.button}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

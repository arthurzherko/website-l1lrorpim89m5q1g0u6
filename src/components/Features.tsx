import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Activity, BarChart2, Target } from "lucide-react";

const features = [
  {
    title: "Workout Tracking",
    description: "Log your exercises, sets, and reps with ease.",
    icon: Activity,
  },
  {
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed charts and graphs.",
    icon: BarChart2,
  },
  {
    title: "Goal Setting",
    description: "Set and track your fitness goals to stay motivated.",
    icon: Target,
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="mb-3 h-10 w-10 text-purple-600" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
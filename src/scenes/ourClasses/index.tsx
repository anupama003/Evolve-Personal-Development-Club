import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/one-one.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import image6 from "@/assets/6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Self-confidence",
    description:
      "Learn how to be self-confident.",
    image: image1,
  },
  {
    name: "Mind & Body",
    description:
      "Understand and harness the mind-body connection.",
    image: image2,
  },
  {
    name: "Self-Image",
    description:
      "Learn how to improve how you think about your own body.",
    image: image3,
  },
  {
    name: "Self-esteem",
    description:
      "Learn strategies for feeling better about yourself",
    image: image4,
  },
  {
    name: "Visualisations",
    description:
      "Learn different visualisation strategies for self-healing",
    image: image5,
  },
  {
    name: "Master yourself",
    description:
      "Understand how your mind and emotions affect you and how to be in control",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            As the world changes and evolves, 
             there is always something new to learn about and improve on. 
             From mindfulness to skill development - learn how to live your best life!.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
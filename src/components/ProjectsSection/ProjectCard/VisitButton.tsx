import { motion } from "framer-motion";
import { spring } from "../../../styles/transitions";
import OpenInNew from "../../Icons/OpenInNew";

interface Props {
  actionText: string;
  projectName: string;
  projectURL: string;
}

export default function VisitButton({
  actionText,
  projectName,
  projectURL,
}: Props) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={spring}
      className={
        "group flex flex-row gap-2 text-lg sm:text-2xl px-4 py-2 items-center rounded-full bg-background-darkish-transparent"
      }
      href={projectURL}
      target={"_blank"}
      rel="noreferrer"
      draggable={false}
    >
      <div
        className={
          "text-text-secondary group-hover:text-text-primary transition-colors duration-200 ease-in-out"
        }
      >
        {actionText}&nbsp;
        <b className={"text-text-secondary group-hover:text-primary"}>
          {projectName}
        </b>
      </div>
      <OpenInNew
        className={
          "w-4 sm:w-6 fill-text-secondary group-hover:fill-text-primary transition-fill duration-200 ease-in-out"
        }
      />
    </motion.a>
  );
}

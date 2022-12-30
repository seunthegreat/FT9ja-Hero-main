import { features } from "../constants";
import styles, {layout} from "../style";
import BenefitCard from "./BenefitCard";

const Benefits = () => (
  <section id="features" className={[layout.section]}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading}>Benefits of becoming an Affiliate</h2>
    </div>
    <div className={`${layout.sectionItems} flex-col`}>
      {features.map((feature, index) => (
        <BenefitCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Benefits;
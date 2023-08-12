import React from "react";
import NameOption from "../../../components/Application/common/NameOption";
import Task from "../../../components/Application/common/Task";

const AllTasks = () => {
  return (
    <div className="flex flex-col">
      <div>
        <NameOption option={"All tasks"} />
      </div>
      <div className="mt-12">
        <Task
          priority={4}
          status="inProgress"
          title="Préparer la pâte à boudin"
          description="Préparez une délicieuse pâte à boudin en mélangeant de la viande hachée avec des épices savoureuses. Ensuite, façonnez-la en saucisses et faites-les cuire jusqu'à ce qu'elles soient bien dorées."
          schoolSubject="Cuisine"
        />
        <Task
          priority={2}
          status="todo"
          title="Résoudre les équations quadratiques"
          description="Utilisez les méthodes de résolution appropriées pour résoudre des équations quadratiques complexes. Identifiez les racines et vérifiez vos solutions pour vous assurer de leur exactitude."
          schoolSubject="Mathématiques"
        />
        <Task
          priority={3}
          status="finished"
          title="Comprendre le processus de photosynthèse"
          description="Explorez en profondeur le processus de photosynthèse qui se produit dans les plantes. Découvrez comment elles capturent la lumière solaire et la transforment en énergie."
          schoolSubject="Biologie"
        />
        <Task
          priority={1}
          status="inProgress"
          title="Préparer une présentation sur la Renaissance"
          description="Recherchez et compilez des informations sur la période de la Renaissance. Mettez en évidence les œuvres artistiques, les découvertes scientifiques et les événements historiques importants de cette époque."
          schoolSubject="Histoire de l'Art"
        />
        <Task
          priority={2}
          status="todo"
          title="Lire le roman 'Great Expectations'"
          description="Plongez dans l'univers captivant du roman de Charles Dickens. Suivez l'histoire de Pip et explorez les thèmes complexes de l'amour, de la classe sociale et de l'ambition."
          schoolSubject="Anglais"
        />
        <Task
          priority={3}
          status="finished"
          title="Composer une mélodie au piano"
          description="Libérez votre créativité musicale en composant une mélodie originale au piano. Expérimentez avec les accords, les harmonies et les motifs pour créer une pièce musicale unique."
          schoolSubject="Musique"
        />
        <Task
          priority={4}
          status="inProgress"
          title="Participer à des exercices de gymnastique"
          description="Rejoignez une séance d'exercices de gymnastique pour améliorer votre flexibilité, votre force et votre équilibre. Suivez les instructions de l'instructeur et engagez-vous dans une séance d'entraînement dynamique."
          schoolSubject="Éducation physique"
        />
        <Task
          priority={1}
          status="todo"
          title="Créer une peinture abstraite"
          description="Laissez libre cours à votre créativité artistique en créant une peinture abstraite. Expérimentez avec les formes, les couleurs et les textures pour produire une œuvre qui exprime vos émotions."
          schoolSubject="Art plastique"
        />
      </div>
    </div>
  );
};

export default AllTasks;

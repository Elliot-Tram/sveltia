import Image from "next/image";
import { CalloutBox } from "@/components/blog/callout-box";
import { WegovyDosageChart } from "@/components/blog/infographics/wegovy-dosage-chart";
import { TreatmentComparison } from "@/components/blog/infographics/treatment-comparison";

export function WegovyGuideComplet() {
  return (
    <>
      <CalloutBox variant="retenir" title="À retenir">
        <ul>
          <li>
            Le Wegovy (sémaglutide 2,4 mg) est le <strong>premier traitement injectable spécifiquement autorisé contre l&apos;obésité</strong> en France, disponible en pharmacie depuis octobre 2024.
          </li>
          <li>
            Les études cliniques (programme STEP) montrent une perte de poids moyenne de <strong>15 à 17 % du poids initial</strong> sur 68 semaines.
          </li>
          <li>
            Le prix varie de <strong>180 à 260 euros par mois</strong> selon le dosage. Le Wegovy <strong>n&apos;est pas remboursé</strong> par la Sécurité sociale en 2026.
          </li>
          <li>
            Les effets secondaires sont principalement <strong>digestifs</strong> (nausées, vomissements, diarrhées), surtout en phase d&apos;escalade de dose.
          </li>
          <li>
            Depuis juin 2025, <strong>tout médecin</strong> (y compris généraliste) peut prescrire le Wegovy, sans avis préalable d&apos;un spécialiste.
          </li>
        </ul>
      </CalloutBox>

      {/* Section 1 */}
      <h2 id="quest-ce-que-wegovy">Qu&apos;est-ce que le Wegovy ?</h2>

      <p>
        Le Wegovy est un médicament injectable développé par le laboratoire Novo Nordisk pour le traitement de l&apos;obésité et du surpoids. Son principe actif, le <a href="https://fr.wikipedia.org/wiki/S%C3%A9maglutide" target="_blank" rel="noopener noreferrer">sémaglutide</a>, appartient à la famille des agonistes des récepteurs du GLP-1. C&apos;est la même molécule que l&apos;Ozempic, mais à un dosage plus élevé (2,4 mg contre 2 mg maximum) et avec une indication différente.
      </p>

      <p>
        Commercialisé en France depuis octobre 2024, le Wegovy a obtenu son autorisation de mise sur le marché (AMM) européenne en janvier 2022. C&apos;est une avancée majeure dans la prise en charge médicamenteuse de l&apos;obésité, un domaine où les options étaient jusqu&apos;ici très limitées.
      </p>

      <p>
        Concrètement, le Wegovy agit sur trois leviers : il réduit l&apos;appétit en agissant sur les centres de la satiété dans le cerveau, il ralentit la vidange gastrique (vous vous sentez rassasié plus longtemps) et il régule la glycémie. C&apos;est cette triple action qui explique son efficacité remarquable sur la perte de poids.
      </p>

      <h3 id="difference-ozempic">Quelle différence avec l&apos;Ozempic ?</h3>

      <p>
        La confusion est fréquente, et elle est compréhensible. <a href="/ozempic-guide-complet-prix-avis-effets-secondaires">L&apos;Ozempic</a> et le Wegovy contiennent exactement la même molécule : le sémaglutide. La différence est dans l&apos;indication et le dosage.
      </p>

      <ul>
        <li><strong>Ozempic</strong> : autorisé pour le diabète de type 2, dosage max 2 mg, remboursé à 65 %</li>
        <li><strong>Wegovy</strong> : autorisé pour l&apos;obésité/surpoids, dosage 2,4 mg, non remboursé</li>
      </ul>

      <p>
        En pratique, beaucoup de patients utilisaient l&apos;Ozempic hors AMM pour perdre du poids. Le Wegovy officialise cette approche avec un dosage optimisé et un cadre réglementaire adapté.
      </p>

      {/* Section 2 */}
      <h2 id="wegovy-perte-de-poids">Wegovy et perte de poids : les résultats cliniques</h2>

      <p>
        Les chiffres sont parlants. Le programme d&apos;études cliniques STEP (Semaglutide Treatment Effect in People with obesity) est l&apos;un des plus vastes jamais menés sur un traitement anti-obésité. Plus de 15 000 participants au total, répartis sur plusieurs essais.
      </p>

      <h3 id="etudes-step">Les études STEP en détail</h3>

      <ul>
        <li>
          <strong>STEP 1</strong> (2 000 patients, 68 semaines) : perte de poids moyenne de <strong>14,9 %</strong> du poids initial avec le sémaglutide 2,4 mg, contre 2,4 % avec le placebo. Un tiers des participants a perdu plus de 20 % de son poids. Publication : The New England Journal of Medicine.
        </li>
        <li>
          <strong>STEP 2</strong> (1 200 patients diabétiques) : perte de poids de <strong>9,6 %</strong>. Résultat plus modeste chez les diabétiques, mais toujours significatif.
        </li>
        <li>
          <strong>STEP 3</strong> (611 patients, avec programme comportemental intensif) : perte de <strong>16 %</strong> du poids initial.
        </li>
        <li>
          <strong>STEP 5</strong> (304 patients, 2 ans de suivi) : la perte de poids se maintient à <strong>15,2 %</strong> à 2 ans, confirmant l&apos;efficacité à long terme.
        </li>
      </ul>

      <blockquote>
        La Commission de la transparence considère que le sémaglutide 2,4 mg (Wegovy) apporte une amélioration du service médical rendu mineure (ASMR IV) dans la prise en charge de l&apos;obésité chez l&apos;adulte.
        <br /><small>Source : <a href="https://www.has-sante.fr/jcms/p_3562976/fr/wegovy-semaglutide-obesite" target="_blank" rel="noopener noreferrer">HAS, avis du 4 décembre 2024</a></small>
      </blockquote>

      <CalloutBox variant="info" title="Et après l'arrêt ?">
        <p>
          L&apos;étude STEP 4 a montré que les patients qui arrêtent le Wegovy reprennent en moyenne les deux tiers du poids perdu dans l&apos;année suivante. C&apos;est un point crucial : le Wegovy n&apos;est pas une solution ponctuelle. Sans modification durable des habitudes alimentaires et de l&apos;activité physique, la reprise de poids est quasi systématique.
        </p>
      </CalloutBox>

      {/* Section 3 */}
      <Image
        src="/images/ozempic-pharmacy.webp"
        alt="Illustration d'un comptoir de pharmacie avec médicaments"
        width={1344}
        height={768}
        className="my-6 w-full rounded-xl"
      />

      <h2 id="prix-wegovy-france">Prix du Wegovy en France</h2>

      <p>
        Le prix du Wegovy n&apos;est pas réglementé puisqu&apos;il n&apos;est pas remboursé. Il varie selon les pharmacies et le dosage. Voici les tarifs moyens observés en 2026 :
      </p>

      <table>
        <thead>
          <tr>
            <th>Dosage</th>
            <th>Présentation</th>
            <th>Prix indicatif / mois</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0,25 mg (initiation)</td>
            <td>4 stylos préremplis</td>
            <td>~180 euros</td>
          </tr>
          <tr>
            <td>0,5 mg</td>
            <td>4 stylos préremplis</td>
            <td>~195 euros</td>
          </tr>
          <tr>
            <td>1 mg</td>
            <td>4 stylos préremplis</td>
            <td>~215 euros</td>
          </tr>
          <tr>
            <td>1,7 mg</td>
            <td>4 stylos préremplis</td>
            <td>~235 euros</td>
          </tr>
          <tr>
            <td>2,4 mg (entretien)</td>
            <td>4 stylos préremplis</td>
            <td>~260 euros</td>
          </tr>
        </tbody>
      </table>

      <p>
        Le coût mensuel en dose d&apos;entretien tourne donc autour de <strong>260 euros par mois</strong>, entièrement à la charge du patient. Sur un an, cela représente plus de 3 000 euros. Un budget conséquent qui freine beaucoup de patients.
      </p>

      <h3 id="remboursement-wegovy">Remboursement par la Sécurité sociale</h3>

      <p>
        En 2026, le Wegovy <strong>n&apos;est pas remboursé</strong> par l&apos;Assurance maladie. La HAS a rendu un avis favorable au remboursement en décembre 2024, mais le Comité économique des produits de santé (CEPS) n&apos;a pas encore fixé de prix pour la prise en charge. Les négociations sont toujours en cours.
      </p>

      <p>
        En attendant, certaines mutuelles commencent à proposer des forfaits partiels pour les traitements anti-obésité. Renseignez-vous auprès de votre complémentaire santé.
      </p>

      {/* CTA mid-article */}
      <div className="my-8 rounded-xl border border-teal/30 bg-teal-light/20 p-5 text-center">
        <p className="text-sm font-semibold text-foreground">
          Vous souhaitez comparer les traitements GLP-1 disponibles ?
        </p>
        <a
          href="/ozempic-guide-complet-prix-avis-effets-secondaires"
          className="mt-3 inline-flex items-center justify-center rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Lire notre guide complet Ozempic
        </a>
      </div>

      {/* Section 4 */}
      <h2 id="effets-secondaires-wegovy">Effets secondaires du Wegovy</h2>

      <p>
        Le profil d&apos;effets secondaires du Wegovy est similaire à celui de l&apos;<a href="/ozempic-guide-complet-prix-avis-effets-secondaires">Ozempic</a>, puisque c&apos;est la même molécule. La principale différence : le dosage plus élevé (2,4 mg vs 2 mg max) peut intensifier certains effets digestifs, surtout en début de traitement.
      </p>

      <h3 id="effets-frequents-wegovy">Effets fréquents</h3>

      <p>
        Les données du <a href="https://www.vidal.fr/actualites/31008-prise-en-charge-de-l-obesite-et-du-surpoids-le-medicament-wegovy-est-disponible-en-pharmacie.html" target="_blank" rel="noopener noreferrer">Vidal</a> et du RCP indiquent les effets suivants :
      </p>

      <p>
        <strong>Très fréquents (plus de 30 % des patients)</strong> :
      </p>
      <ul>
        <li><strong>Nausées</strong> : l&apos;effet le plus rapporté, surtout lors des augmentations de dose</li>
        <li><strong>Diarrhées</strong></li>
        <li><strong>Vomissements</strong></li>
        <li><strong>Constipation</strong></li>
        <li><strong>Douleurs abdominales</strong></li>
      </ul>

      <p>
        <strong>Fréquents (1 à 10 % des patients)</strong> :
      </p>
      <ul>
        <li>Maux de tête</li>
        <li>Fatigue</li>
        <li>Reflux gastro-oesophagien</li>
        <li>Ballonnements, flatulences</li>
        <li>Vertiges</li>
        <li>Réactions au site d&apos;injection</li>
      </ul>

      <h3 id="effets-graves-wegovy">Effets rares mais graves</h3>

      <ul>
        <li><strong>Pancréatite aiguë</strong> : rare mais nécessite une consultation en urgence en cas de douleur abdominale intense</li>
        <li><strong>Calculs biliaires et cholécystite</strong> : risque accru, surtout en cas de perte de poids rapide</li>
        <li><strong>Pensées suicidaires</strong> : l&apos;<a href="https://ansm.sante.fr/uploads/2022/03/11/20220311-atuc-wegovy-rcp.pdf" target="_blank" rel="noopener noreferrer">ANSM</a> recommande une vigilance particulière. Des cas ont été signalés dans le cadre de la pharmacovigilance, même si le lien causal n&apos;est pas établi.</li>
        <li><strong>Risque thyroïdien</strong> : contre-indication en cas d&apos;antécédent de carcinome médullaire de la thyroïde</li>
      </ul>

      <CalloutBox variant="warning">
        <p>
          Si vous ressentez des effets inhabituels sous Wegovy (humeur dépressive, douleur abdominale intense, signes allergiques), consultez immédiatement votre médecin. Ne modifiez jamais votre dosage sans avis médical.
        </p>
      </CalloutBox>

      {/* Section 5 */}
      <h2 id="posologie-wegovy">Posologie et escalade de dose</h2>

      <WegovyDosageChart />

      <p>
        Le Wegovy s&apos;injecte <strong>une fois par semaine</strong> en sous-cutané (abdomen, cuisse ou bras), le même jour chaque semaine. L&apos;escalade de dose est plus progressive que pour l&apos;Ozempic, avec 5 paliers au lieu de 4.
      </p>

      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Dosage</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initiation</td>
            <td>0,25 mg / semaine</td>
            <td>4 semaines</td>
          </tr>
          <tr>
            <td>Palier 1</td>
            <td>0,5 mg / semaine</td>
            <td>4 semaines</td>
          </tr>
          <tr>
            <td>Palier 2</td>
            <td>1 mg / semaine</td>
            <td>4 semaines</td>
          </tr>
          <tr>
            <td>Palier 3</td>
            <td>1,7 mg / semaine</td>
            <td>4 semaines</td>
          </tr>
          <tr>
            <td>Entretien</td>
            <td>2,4 mg / semaine</td>
            <td>En continu</td>
          </tr>
        </tbody>
      </table>

      <p>
        L&apos;escalade progressive est indispensable pour limiter les nausées et vomissements. Si un palier est mal toléré, le médecin peut prolonger la durée avant de passer au suivant. La dose de 2,4 mg par semaine est la dose cible pour la perte de poids. En dessous, l&apos;efficacité est réduite.
      </p>

      <CalloutBox variant="info">
        <p>
          En cas d&apos;oubli d&apos;une injection, réalisez-la dans les 5 jours suivants. Au-delà, sautez la dose et reprenez le calendrier habituel. Ne doublez jamais une dose.
        </p>
      </CalloutBox>

      {/* Section 6 */}
      <h2 id="avis-patients-wegovy">Avis patients et retours d&apos;expérience</h2>

      <p>
        Le Wegovy est encore relativement récent en France (disponible depuis fin 2024), mais les premiers retours sont contrastés. Voici ce qui ressort des forums de santé et des plateformes d&apos;avis :
      </p>

      <p><strong>Ce que les patients apprécient :</strong></p>
      <ul>
        <li>Perte de poids rapide et visible dès les premières semaines</li>
        <li>Réduction nette des fringales et du grignotage compulsif</li>
        <li>Injection hebdomadaire simple (stylo prérempli, comme l&apos;Ozempic)</li>
        <li>Sentiment de reprendre le contrôle sur son alimentation</li>
      </ul>

      <p><strong>Les réserves et critiques :</strong></p>
      <ul>
        <li>Nausées importantes pendant les 2-3 premiers mois (la plainte numéro un)</li>
        <li>Prix très élevé sans remboursement (260 euros/mois en dose d&apos;entretien)</li>
        <li>Peur de la reprise de poids à l&apos;arrêt</li>
        <li>Fatigue et baisse d&apos;énergie chez certains utilisateurs</li>
        <li>Ruptures de stock ponctuelles en pharmacie</li>
      </ul>

      <blockquote>
        Depuis le 23 juin 2025, les spécialités contre l&apos;obésité Wegovy, Saxenda et Mounjaro peuvent être prescrites par tout médecin, y compris en initiation de traitement.
        <br /><small>Source : <a href="https://www.vidal.fr/actualites/31437-wegovy-saxenda-mounjaro-prescription-elargie-a-tout-medecin-y-compris-en-initiation-de-traitement.html" target="_blank" rel="noopener noreferrer">Vidal, 23 juin 2025</a></small>
      </blockquote>

      {/* Section 7 */}
      <h2 id="wegovy-vs-ozempic-mounjaro">Wegovy vs Ozempic vs Mounjaro</h2>

      <TreatmentComparison />

      <p>
        Le choix entre ces trois traitements dépend de votre profil médical. Si vous êtes diabétique de type 2, l&apos;<a href="/ozempic-guide-complet-prix-avis-effets-secondaires">Ozempic</a> reste le traitement de référence, avec l&apos;avantage d&apos;être remboursé. Si votre objectif principal est la perte de poids et que vous remplissez les critères (IMC ≥ 30 ou ≥ 27 avec comorbidité), le Wegovy est l&apos;option officielle.
      </p>

      <p>
        Le <a href="/mounjaro-guide-complet-prix-avis-effets-secondaires">Mounjaro</a> (tirzépatide) affiche des résultats encore supérieurs dans les études cliniques (~20-25 % de perte de poids), grâce à son double mécanisme d&apos;action GLP-1/GIP. Sa disponibilité en France est encore limitée en 2026, mais il gagne du terrain rapidement.
      </p>

      <p>
        Dans tous les cas, cette décision relève de votre médecin. Ne vous auto-médiquez jamais avec ces traitements.
      </p>

      {/* Section 8 */}
      <h2 id="obtenir-prescription-wegovy">Comment obtenir une prescription ?</h2>

      <p>
        Le parcours a été considérablement simplifié depuis juin 2025. Avant cette date, seul un spécialiste (endocrinologue, nutritionniste, médecin de centre obésité) pouvait initier le traitement. Désormais, <strong>tout médecin peut prescrire le Wegovy</strong>.
      </p>

      <ol>
        <li>
          <strong>Consultez votre médecin traitant</strong> : il vérifiera que vous remplissez les critères d&apos;éligibilité (IMC ≥ 30, ou IMC ≥ 27 avec au moins une comorbidité liée au poids). Vous devez avoir moins de 65 ans.
        </li>
        <li>
          <strong>Bilan de santé initial</strong> : bilan sanguin (glycémie, HbA1c, bilan lipidique, hépatique et rénal), mesure de la pression artérielle, évaluation des antécédents.
        </li>
        <li>
          <strong>Prescription et achat en pharmacie</strong> : l&apos;ordonnance vous permet d&apos;acheter le Wegovy en pharmacie de ville. Pensez à vérifier la disponibilité auprès de votre pharmacien (des tensions d&apos;approvisionnement existent).
        </li>
        <li>
          <strong>Suivi médical régulier</strong> : consultations tous les 1 à 3 mois pour évaluer la tolérance, ajuster la posologie et accompagner les changements de mode de vie.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Acheter du Wegovy en ligne sans ordonnance">
        <p>
          L&apos;achat de Wegovy sur des sites non agréés est <strong>illégal et dangereux</strong>. Les produits peuvent être contrefaits, mal conservés ou périmés. L&apos;ANSM met régulièrement en garde contre ces pratiques. Ne faites confiance qu&apos;au circuit pharmaceutique officiel.
        </p>
      </CalloutBox>

      {/* Section 9 - FAQ */}
      <h2 id="faq">Questions fréquentes (FAQ)</h2>

      <h3>Quelle perte de poids attendre avec le Wegovy ?</h3>
      <p>
        Les études cliniques STEP montrent une perte de poids moyenne de 15 à 17 % du poids initial sur 68 semaines à la dose de 2,4 mg. En pratique, cela représente environ 2 % du poids corporel par mois, soit 1,5 à 2,5 kg par mois pour une personne de 100 kg.
      </p>

      <h3>Le Wegovy est-il remboursé en France ?</h3>
      <p>
        Non, pas en 2026. La HAS a rendu un avis favorable au remboursement, mais les négociations de prix avec le CEPS sont toujours en cours. Le coût est intégralement à la charge du patient (environ 260 euros par mois en dose d&apos;entretien).
      </p>

      <h3>Mon médecin généraliste peut-il me prescrire le Wegovy ?</h3>
      <p>
        Oui, depuis le 23 juin 2025, tout médecin (généraliste inclus) peut prescrire le Wegovy en initiation de traitement. Auparavant, une prescription initiale par un spécialiste était obligatoire.
      </p>

      <h3>Quels sont les critères d&apos;éligibilité ?</h3>
      <p>
        Le Wegovy est indiqué chez les adultes de moins de 65 ans présentant un IMC supérieur ou égal à 30 kg/m² (obésité), ou un IMC supérieur ou égal à 27 kg/m² (surpoids) avec au moins une comorbidité liée au poids (diabète de type 2, hypertension, apnée du sommeil, etc.).
      </p>

      <h3>Pourquoi je ne perds pas de poids avec le Wegovy ?</h3>
      <p>
        Plusieurs facteurs : vous êtes peut-être encore en phase d&apos;escalade de dose (la dose efficace est 2,4 mg), votre alimentation n&apos;a pas suffisamment évolué, ou votre métabolisme réagit différemment. Si après 12 semaines à dose maximale vous n&apos;avez pas perdu au moins 5 % de votre poids initial, votre médecin réévaluera le traitement.
      </p>

      <h3>Le Wegovy est-il dangereux ?</h3>
      <p>
        Utilisé sous supervision médicale et dans le cadre de son indication, le Wegovy a un profil de sécurité bien documenté. Les effets secondaires sont principalement digestifs et transitoires. Des effets graves (pancréatite, complications biliaires) restent rares mais possibles. Une surveillance des troubles de l&apos;humeur est recommandée par l&apos;ANSM.
      </p>

      <h3>Quelle est la différence entre le Wegovy et l&apos;Ozempic ?</h3>
      <p>
        Même molécule (sémaglutide), indications différentes. L&apos;<a href="/ozempic-guide-complet-prix-avis-effets-secondaires">Ozempic</a> est indiqué pour le diabète de type 2 (dose max 2 mg, remboursé). Le Wegovy est indiqué pour l&apos;obésité (dose 2,4 mg, non remboursé). L&apos;efficacité sur la perte de poids est supérieure avec le Wegovy grâce au dosage plus élevé.
      </p>

      <h3>Peut-on boire de l&apos;alcool sous Wegovy ?</h3>
      <p>
        Pas d&apos;interaction médicamenteuse directe, mais l&apos;alcool aggrave les nausées (déjà fréquentes sous Wegovy) et apporte des calories vides qui limitent l&apos;efficacité du traitement. Modération fortement recommandée.
      </p>

      {/* CTA final */}
      <div className="mt-12 rounded-xl border-2 border-teal bg-teal-light/30 p-6 text-center sm:p-8">
        <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          Vous souhaitez en savoir plus sur les traitements GLP-1 ?
        </p>
        <p className="mt-2 text-muted-foreground">
          Consultez nos guides complets pour comparer les options disponibles et prendre une décision éclairée avec votre médecin.
        </p>
        <a
          href="/"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Découvrir tous nos guides
        </a>
      </div>

      {/* Articles connexes */}
      <div className="mt-12">
        <h2 className="font-heading text-xl font-bold text-foreground">À lire aussi</h2>
        <div className="mt-4 space-y-3">
          <a
            href="/ozempic-guide-complet-prix-avis-effets-secondaires"
            className="block rounded-lg border border-border p-4 transition-colors hover:border-teal hover:bg-surface"
          >
            <p className="text-sm font-semibold text-foreground">Ozempic : Guide Complet - Prix, Avis, Effets Secondaires</p>
            <p className="mt-1 text-xs text-muted-foreground">Tout savoir sur l&apos;Ozempic (sémaglutide) pour le diabète de type 2 et la perte de poids.</p>
          </a>
          <a
            href="/"
            className="block rounded-lg border border-border p-4 transition-colors hover:border-teal hover:bg-surface"
          >
            <p className="text-sm font-semibold text-foreground">Guide complet des traitements GLP-1 en 2026</p>
            <p className="mt-1 text-xs text-muted-foreground">Comparatif Ozempic, Wegovy, Mounjaro : indications, prix et efficacité.</p>
          </a>
        </div>
      </div>
    </>
  );
}

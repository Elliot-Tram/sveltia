import Image from "next/image";
import { CalloutBox } from "@/components/blog/callout-box";
import { DosageChart } from "@/components/blog/infographics/dosage-chart";
import { TreatmentComparison } from "@/components/blog/infographics/treatment-comparison";

export function OzempicGuideComplet() {
  return (
    <>
      <CalloutBox variant="retenir" title="À retenir">
        <ul>
          <li>
            L&apos;Ozempic (sémaglutide) est un médicament injectable de la classe des agonistes du GLP-1, initialement conçu pour le <strong>diabète de type 2</strong>.
          </li>
          <li>
            Il entraîne une perte de poids significative : en moyenne <strong>5 à 10 % du poids corporel</strong> selon les études cliniques (programme STEP/SUSTAIN).
          </li>
          <li>
            Le prix en France est d&apos;environ <strong>80 à 220 euros par stylo</strong> selon le dosage, avec un remboursement à 65 % par la Sécurité sociale pour les patients diabétiques.
          </li>
          <li>
            Les effets secondaires les plus courants sont <strong>digestifs</strong> (nausées, diarrhées, constipation), généralement transitoires.
          </li>
          <li>
            L&apos;Ozempic nécessite <strong>obligatoirement une ordonnance</strong> médicale et un suivi régulier.
          </li>
        </ul>
      </CalloutBox>

      {/* Section 1 */}
      <h2 id="quest-ce-que-ozempic">Qu&apos;est-ce que l&apos;Ozempic ?</h2>

      <p>
        L&apos;Ozempic est un médicament injectable développé par le laboratoire Novo Nordisk, commercialisé en France depuis 2019. Son principe actif, le <strong>sémaglutide</strong>, appartient à la classe des agonistes des récepteurs du GLP-1 (Glucagon-Like Peptide-1), une famille de traitements qui révolutionne la prise en charge du diabète de type 2 et, plus récemment, de l&apos;obésité.
      </p>

      <p>
        Le GLP-1 est une hormone naturellement produite par l&apos;intestin après un repas. Elle stimule la sécrétion d&apos;insuline, inhibe celle du glucagon et ralentit la vidange gastrique. Le <a href="https://fr.wikipedia.org/wiki/S%C3%A9maglutide" target="_blank" rel="noopener noreferrer">sémaglutide</a> reproduit et amplifie ces effets avec une durée d&apos;action prolongée, ce qui permet une injection unique par semaine.
      </p>

      <p>
        Selon les données de la <a href="https://www.has-sante.fr/jcms/p_3643889/fr/ozempic-27082025-avis-ct21501" target="_blank" rel="noopener noreferrer"><strong>Haute Autorité de Santé (HAS)</strong></a>, l&apos;Ozempic a obtenu un avis favorable pour le traitement du diabète de type 2 insuffisamment contrôlé, en complément d&apos;un régime alimentaire et d&apos;une activité physique. Son service médical rendu (SMR) est jugé important.
      </p>

      <Image
        src="/images/ozempic-molecule.webp"
        alt="Illustration de la structure moleculaire du semaglutide, principe actif de l'Ozempic"
        width={1344}
        height={768}
        className="my-6 w-full rounded-xl"
      />

      <h3 id="comment-fonctionne-ozempic">Comment fonctionne le sémaglutide ?</h3>

      <p>
        Le sémaglutide agit sur trois mécanismes principaux :
      </p>

      <ul>
        <li>
          <strong>Stimulation de l&apos;insuline</strong> : il favorise la production d&apos;insuline par le pancréas uniquement lorsque la glycémie est élevée, ce qui limite le risque d&apos;hypoglycémie.
        </li>
        <li>
          <strong>Réduction de l&apos;appétit</strong> : en agissant sur les centres de la satiété dans le cerveau (hypothalamus), il diminue la sensation de faim et augmente la satiété.
        </li>
        <li>
          <strong>Ralentissement de la vidange gastrique</strong> : la nourriture reste plus longtemps dans l&apos;estomac, ce qui prolonge la sensation de plénitude après les repas.
        </li>
      </ul>

      <p>
        C&apos;est cette triple action qui explique à la fois son efficacité sur le contrôle glycémique et son effet notable sur la perte de poids, un bénéfice qui a largement contribué à la médiatisation du produit.
      </p>

      {/* Section 2 */}
      <h2 id="ozempic-perte-de-poids">Ozempic et perte de poids</h2>

      <p>
        Bien que l&apos;Ozempic ne dispose pas d&apos;une autorisation de mise sur le marché (AMM) spécifique pour la perte de poids en France, ses effets sur le poids corporel ont été largement documentés dans les études cliniques. L&apos;engouement autour de ce médicament s&apos;explique par des résultats significatifs observés aussi bien dans les essais cliniques que dans la pratique médicale quotidienne.
      </p>

      <h3 id="resultats-cliniques">Résultats des études cliniques</h3>

      <p>
        Les principaux résultats sont issus des programmes d&apos;études <strong>SUSTAIN</strong> (pour le diabète) et <strong>STEP</strong> (pour l&apos;obésité avec le Wegovy, même molécule à dose plus élevée) :
      </p>

      <ul>
        <li>
          <strong>SUSTAIN 1 à 10</strong> : chez les patients diabétiques de type 2, la perte de poids moyenne observée est de 4 à 6 kg sur 30 semaines avec le dosage 1 mg (source : publications dans The New England Journal of Medicine et The Lancet).
        </li>
        <li>
          <strong>STEP 1</strong> : chez les patients en surpoids ou obèses (sans diabète), le sémaglutide 2,4 mg (dosage Wegovy) a permis une perte de poids moyenne de <strong>14,9 %</strong> du poids initial sur 68 semaines, soit environ 15 kg pour une personne de 100 kg.
        </li>
        <li>
          <strong>STEP 2</strong> : chez les patients diabétiques et obèses, la perte de poids atteint environ <strong>9,6 %</strong> du poids initial.
        </li>
      </ul>

      <CalloutBox variant="info" title="Ozempic vs Wegovy : quelle différence ?">
        <p>
          L&apos;Ozempic et le <a href="/wegovy-guide-complet-prix-avis-effets-secondaires">Wegovy</a> contiennent tous deux du sémaglutide, mais à des dosages différents. L&apos;Ozempic est indiqué pour le diabète de type 2 (doses de 0,25 à 2 mg), tandis que le Wegovy est spécifiquement autorisé pour la gestion du poids (dose de 2,4 mg). La perte de poids observée avec l&apos;Ozempic aux dosages standards est donc généralement inférieure à celle obtenue avec le Wegovy.
        </p>
      </CalloutBox>

      <p>
        Il est essentiel de noter que la perte de poids varie considérablement d&apos;un individu à l&apos;autre. Elle dépend de nombreux facteurs : dosage utilisé, alimentation, activité physique, métabolisme de base et adhérence au traitement. Une reprise de poids à l&apos;arrêt du traitement est fréquemment rapportée dans les études de suivi.
      </p>

      {/* Section 3 */}
      <Image
        src="/images/ozempic-pharmacy.webp"
        alt="Illustration d'un comptoir de pharmacie avec medicaments et croix pharmaceutique"
        width={1344}
        height={768}
        className="my-6 w-full rounded-xl"
      />

      <h2 id="prix-ozempic-france">Prix de l&apos;Ozempic en France</h2>

      <p>
        Le coût de l&apos;Ozempic est une préoccupation majeure pour les patients. En France, les prix sont encadrés par le Comité économique des produits de santé (CEPS). Voici les tarifs indicatifs en pharmacie :
      </p>

      <table>
        <thead>
          <tr>
            <th>Dosage</th>
            <th>Présentation</th>
            <th>Prix indicatif (TTC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0,25 mg / 0,5 mg</td>
            <td>Stylo prérempli (initiation)</td>
            <td>~80 euros</td>
          </tr>
          <tr>
            <td>1 mg</td>
            <td>Stylo prérempli (4 doses)</td>
            <td>~135 euros</td>
          </tr>
          <tr>
            <td>2 mg</td>
            <td>Stylo prérempli (4 doses)</td>
            <td>~220 euros</td>
          </tr>
        </tbody>
      </table>

      <p>
        Ces prix peuvent varier légèrement d&apos;une pharmacie à l&apos;autre. Il est recommandé de comparer les tarifs et de vérifier le prix de vente au moment de l&apos;achat.
      </p>

      <h3 id="remboursement-securite-sociale">Remboursement par la Sécurité sociale</h3>

      <p>
        L&apos;Ozempic est remboursé à <strong>65 % par l&apos;Assurance maladie</strong> dans le cadre de son indication officielle, c&apos;est-à-dire le traitement du diabète de type 2. Le reste à charge (35 %) est généralement pris en charge par la mutuelle complémentaire du patient.
      </p>

      <blockquote>
        L&apos;Assurance Maladie met en place un dispositif d&apos;accompagnement à la prescription pour certains médicaments antidiabétiques, dont l&apos;Ozempic, afin de renforcer le contrôle des prescriptions et garantir leur bon usage.
        <br /><small>Source : <a href="https://www.ameli.fr/assure/actualites/ozempic-et-autres-antidiabetiques-l-assurance-maladie-renforce-le-controle-des-prescriptions" target="_blank" rel="noopener noreferrer">ameli.fr</a></small>
      </blockquote>

      <p>
      </p>

      <CalloutBox variant="warning" title="Prescription hors AMM">
        <p>
          Lorsque l&apos;Ozempic est prescrit hors AMM (par exemple, uniquement pour la perte de poids chez un patient non diabétique), il n&apos;est <strong>pas remboursé</strong> par la Sécurité sociale. Le coût total reste alors à la charge du patient. L&apos;ANSM a par ailleurs alerté sur les risques liés à l&apos;utilisation détournée de ce médicament.
        </p>
      </CalloutBox>

      {/* Section 4 */}
      <h2 id="effets-secondaires">Effets secondaires de l&apos;Ozempic</h2>

      <p>
        Comme tout médicament, l&apos;Ozempic peut provoquer des effets indésirables. La majorité d&apos;entre eux sont d&apos;ordre digestif et tendent à diminuer au fil des semaines de traitement. Voici un panorama basé sur les données du <a href="https://www.vidal.fr/medicaments/gammes/ozempic-86313.html" target="_blank" rel="noopener noreferrer">Vidal</a> et du résumé des caractéristiques du produit (RCP).
      </p>

      <h3 id="effets-frequents">Effets indésirables fréquents</h3>

      <p>
        Les effets suivants touchent <strong>plus de 10 % des patients</strong> (très fréquents) :
      </p>

      <ul>
        <li><strong>Nausées</strong> : l&apos;effet secondaire le plus rapporté, surtout en début de traitement ou lors de l&apos;augmentation du dosage.</li>
        <li><strong>Diarrhées</strong> : généralement légères à modérées.</li>
        <li><strong>Vomissements</strong> : plus fréquents en phase d&apos;initiation.</li>
      </ul>

      <p>
        Effets fréquents (1 à 10 % des patients) :
      </p>

      <ul>
        <li>Constipation</li>
        <li>Douleurs abdominales</li>
        <li>Ballonnements et flatulences</li>
        <li>Reflux gastro-oesophagien</li>
        <li>Maux de tête</li>
        <li>Fatigue</li>
        <li>Vertiges</li>
        <li>Réactions au site d&apos;injection (rougeur, démangeaison)</li>
      </ul>

      <h3 id="effets-rares-graves">Effets rares mais graves</h3>

      <p>
        Certains effets indésirables sont plus rares mais nécessitent une attention médicale immédiate :
      </p>

      <ul>
        <li>
          <strong>Pancréatite aiguë</strong> : des cas ont été rapportés. Toute douleur abdominale intense et persistante doit conduire à consulter en urgence.
        </li>
        <li>
          <strong>Complications biliaires</strong> : risque accru de calculs biliaires et de cholécystite.
        </li>
        <li>
          <strong>Rétinopathie diabétique</strong> : chez les patients diabétiques, une aggravation a été observée dans certaines études, surtout en cas d&apos;amélioration rapide de la glycémie.
        </li>
        <li>
          <strong>Réactions allergiques</strong> : rares, mais des cas d&apos;angio-oedème et de réactions anaphylactiques ont été signalés.
        </li>
        <li>
          <strong>Tumeurs thyroïdiennes</strong> : un risque théorique de tumeurs à cellules C de la thyroïde a été identifié chez le rongeur. Ce risque n&apos;a pas été confirmé chez l&apos;humain, mais l&apos;Ozempic est contre-indiqué en cas d&apos;antécédent personnel ou familial de carcinome médullaire de la thyroïde.
        </li>
      </ul>

      <CalloutBox variant="warning">
        <p>
          En cas d&apos;effets indésirables persistants ou inhabituels, contactez immédiatement votre médecin traitant ou votre pharmacien. Ne modifiez jamais votre dosage sans avis médical.
        </p>
      </CalloutBox>

      {/* Section 5 */}
      <h2 id="posologie-dosage">Posologie et dosage</h2>

      <DosageChart />

      <p>
        L&apos;Ozempic s&apos;administre par <strong>injection sous-cutanée une fois par semaine</strong>, le même jour chaque semaine, quel que soit le moment de la journée, avec ou sans repas. Les zones d&apos;injection recommandées sont l&apos;abdomen, la cuisse ou le haut du bras.
      </p>

      <p>
        Le protocole d&apos;escalade de dose recommandé par le laboratoire est le suivant :
      </p>

      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Dosage</th>
            <th>Durée</th>
            <th>Objectif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initiation</td>
            <td>0,25 mg / semaine</td>
            <td>4 semaines</td>
            <td>Adaptation du corps au traitement</td>
          </tr>
          <tr>
            <td>Phase 2</td>
            <td>0,5 mg / semaine</td>
            <td>4 semaines minimum</td>
            <td>Premier palier thérapeutique</td>
          </tr>
          <tr>
            <td>Phase 3</td>
            <td>1 mg / semaine</td>
            <td>En continu</td>
            <td>Dosage standard d&apos;entretien</td>
          </tr>
          <tr>
            <td>Phase 4 (si nécessaire)</td>
            <td>2 mg / semaine</td>
            <td>En continu</td>
            <td>Dosage maximal, si réponse insuffisante</td>
          </tr>
        </tbody>
      </table>

      <p>
        L&apos;escalade progressive est essentielle pour minimiser les effets secondaires digestifs. Chaque augmentation de dose doit être validée par le médecin prescripteur en fonction de la tolérance et de la réponse clinique du patient.
      </p>

      <CalloutBox variant="info">
        <p>
          En cas d&apos;oubli d&apos;une injection, il est possible de la réaliser dans les 5 jours suivant la date prévue. Au-delà, il faut sauter la dose oubliée et reprendre le calendrier habituel. Ne doublez jamais la dose pour compenser un oubli.
        </p>
      </CalloutBox>

      {/* Section 6 */}
      <h2 id="avis-patients">Avis patients et retours d&apos;expérience</h2>

      <p>
        Les retours d&apos;expérience des patients sous Ozempic sont globalement positifs, avec toutefois des nuances importantes. Voici une synthèse des tendances observées sur les forums de santé et les plateformes d&apos;avis patients en France :
      </p>

      <p>
        <strong>Points positifs les plus cités :</strong>
      </p>

      <ul>
        <li>Réduction significative de l&apos;appétit dès les premières semaines</li>
        <li>Perte de poids progressive et régulière (3 à 8 kg sur les 3 premiers mois en moyenne)</li>
        <li>Amélioration des glycémies chez les patients diabétiques</li>
        <li>Simplicité de l&apos;injection hebdomadaire (stylo prérempli)</li>
        <li>Meilleur contrôle des envies alimentaires et du grignotage</li>
      </ul>

      <p>
        <strong>Points négatifs ou réserves :</strong>
      </p>

      <ul>
        <li>Nausées parfois intenses en début de traitement, décourageant certains patients</li>
        <li>Coût élevé en cas de non-remboursement (prescription hors AMM)</li>
        <li>Reprise de poids rapportée à l&apos;arrêt du traitement</li>
        <li>Fatigue et baisse d&apos;énergie chez certains utilisateurs</li>
        <li>Difficultés d&apos;approvisionnement en pharmacie (ruptures de stock ponctuelles)</li>
      </ul>

      <CalloutBox variant="info" title="Note sur les témoignages">
        <p>
          Les avis patients doivent être interprétés avec précaution. Chaque situation médicale est unique. L&apos;efficacité et la tolérance d&apos;un médicament dépendent de nombreux facteurs individuels. Seul votre médecin peut évaluer si l&apos;Ozempic est adapté à votre profil.
        </p>
      </CalloutBox>

      {/* Section 7 */}
      <h2 id="ozempic-vs-wegovy-mounjaro">Ozempic vs Wegovy vs Mounjaro</h2>

      <TreatmentComparison />

      <p>
        Le marché des traitements agonistes du GLP-1 s&apos;est considérablement élargi. Voici un comparatif synthétique des trois principaux médicaments disponibles ou attendus en France :
      </p>

      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Ozempic</th>
            <th>Wegovy</th>
            <th>Mounjaro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Molécule</td>
            <td>Sémaglutide</td>
            <td>Sémaglutide</td>
            <td>Tirzépatide</td>
          </tr>
          <tr>
            <td>Laboratoire</td>
            <td>Novo Nordisk</td>
            <td>Novo Nordisk</td>
            <td>Eli Lilly</td>
          </tr>
          <tr>
            <td>Indication principale</td>
            <td>Diabète type 2</td>
            <td>Obésité / surpoids</td>
            <td>Diabète type 2 / Obésité</td>
          </tr>
          <tr>
            <td>Dose max</td>
            <td>2 mg/semaine</td>
            <td>2,4 mg/semaine</td>
            <td>15 mg/semaine</td>
          </tr>
          <tr>
            <td>Perte de poids moyenne</td>
            <td>5 à 10 %</td>
            <td>15 à 17 %</td>
            <td>20 à 25 %</td>
          </tr>
          <tr>
            <td>Mécanisme</td>
            <td>Agoniste GLP-1</td>
            <td>Agoniste GLP-1</td>
            <td>Double agoniste GLP-1/GIP</td>
          </tr>
          <tr>
            <td>Disponibilité France</td>
            <td>Disponible</td>
            <td>Disponible (tensions)</td>
            <td>Autorisé (en cours de commercialisation)</td>
          </tr>
        </tbody>
      </table>

      <p>
        Le <a href="/mounjaro-guide-complet-prix-avis-effets-secondaires">Mounjaro</a> (tirzépatide) se distingue par son double mécanisme d&apos;action (GLP-1 et GIP), qui semble offrir une perte de poids supérieure selon les études SURMOUNT. Toutefois, sa disponibilité en France reste encore limitée en 2026, et le recul clinique est moindre.
      </p>

      <p>
        Le choix entre ces traitements dépend du profil médical du patient, de ses objectifs (contrôle du diabète, perte de poids, ou les deux) et de la tolérance individuelle. Cette décision relève exclusivement du médecin prescripteur.
      </p>

      {/* Section 8 */}
      <h2 id="obtenir-prescription">Comment obtenir une prescription ?</h2>

      <p>
        L&apos;Ozempic est un <strong>médicament soumis à prescription médicale obligatoire</strong>. Il est impossible de l&apos;obtenir légalement sans ordonnance en France. Voici les étapes pour obtenir une prescription :
      </p>

      <ol>
        <li>
          <strong>Consultez votre médecin traitant</strong> : c&apos;est le point de départ. Il évaluera votre situation médicale globale et déterminera si l&apos;Ozempic est adapté à votre profil (diabète de type 2 insuffisamment contrôlé, facteurs de risque cardiovasculaire, etc.).
        </li>
        <li>
          <strong>Bilan sanguin préalable</strong> : un bilan comprenant glycémie à jeun, HbA1c, bilan hépatique et rénal, et bilan lipidique est généralement demandé avant l&apos;initiation du traitement.
        </li>
        <li>
          <strong>Consultation spécialisée (si nécessaire)</strong> : votre médecin peut vous orienter vers un endocrinologue ou un diabétologue, notamment en cas de diabète complexe ou de première prescription.
        </li>
        <li>
          <strong>Ordonnance et délivrance en pharmacie</strong> : une fois l&apos;ordonnance établie, rendez-vous en pharmacie. En raison de tensions d&apos;approvisionnement ponctuelles, il peut être utile de vérifier la disponibilité auprès de votre pharmacien.
        </li>
        <li>
          <strong>Suivi régulier</strong> : des consultations de suivi (généralement tous les 3 mois) permettent d&apos;évaluer l&apos;efficacité du traitement, d&apos;ajuster la posologie et de surveiller les éventuels effets secondaires.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Acheter de l'Ozempic en ligne">
        <p>
          L&apos;achat d&apos;Ozempic sur Internet (sites non agréés, réseaux sociaux) est <strong>illégal et dangereux</strong>. Les produits vendus en dehors du circuit pharmaceutique officiel peuvent être contrefaits, mal dosés ou périmés. L&apos;<a href="https://ansm.sante.fr/actualites/ozempic-semaglutide-un-medicament-a-utiliser-uniquement-dans-le-traitement-du-diabete-de-type-2" target="_blank" rel="noopener noreferrer">ANSM</a> rappelle régulièrement les risques graves associés à ces pratiques.
        </p>
      </CalloutBox>

      {/* Section 9 */}
      <h2 id="faq">Questions fréquentes (FAQ)</h2>

      <h3>L&apos;Ozempic fait-il maigrir ?</h3>
      <p>
        Oui, l&apos;Ozempic entraîne généralement une perte de poids, même s&apos;il n&apos;est pas officiellement indiqué pour cet usage en France. Les études montrent une perte de 5 à 10 % du poids corporel chez les patients diabétiques. Toutefois, les résultats varient selon les individus et cette utilisation hors AMM n&apos;est pas remboursée.
      </p>

      <h3>Combien de temps avant de voir les premiers résultats ?</h3>
      <p>
        La plupart des patients observent une réduction de l&apos;appétit dès les premières semaines de traitement. Une perte de poids mesurable survient généralement entre la 4e et la 8e semaine, une fois le dosage thérapeutique atteint (0,5 mg ou 1 mg).
      </p>

      <h3>Peut-on prendre l&apos;Ozempic sans être diabétique ?</h3>
      <p>
        Un médecin peut prescrire l&apos;Ozempic hors AMM pour un patient non diabétique en surpoids ou obèse, mais cette utilisation n&apos;est pas remboursée par la Sécurité sociale. Le <a href="/wegovy-guide-complet-prix-avis-effets-secondaires">Wegovy</a>, qui contient la même molécule à un dosage plus élevé, est l&apos;alternative officiellement autorisée pour la gestion du poids.
      </p>

      <h3>Que se passe-t-il à l&apos;arrêt de l&apos;Ozempic ?</h3>
      <p>
        Les études de suivi montrent qu&apos;une majorité de patients reprennent une partie du poids perdu dans les 12 mois suivant l&apos;arrêt du traitement. C&apos;est pourquoi le traitement est souvent envisagé sur le long terme, en association avec des modifications durables de l&apos;hygiène de vie (alimentation, activité physique).
      </p>

      <h3>L&apos;Ozempic est-il dangereux ?</h3>
      <p>
        Utilisé sous supervision médicale et dans le cadre de son indication, l&apos;Ozempic présente un profil de sécurité acceptable, documenté par de nombreuses études cliniques. Les effets secondaires sont principalement digestifs et transitoires. Cependant, des effets graves (pancréatite, complications biliaires) restent possibles, d&apos;où l&apos;importance d&apos;un suivi médical régulier.
      </p>

      <h3>Peut-on boire de l&apos;alcool sous Ozempic ?</h3>
      <p>
        Il n&apos;y a pas d&apos;interaction médicamenteuse directe entre l&apos;Ozempic et l&apos;alcool. Cependant, l&apos;alcool peut aggraver les nausées et les troubles digestifs fréquents sous sémaglutide. De plus, l&apos;alcool apporte des calories vides qui peuvent limiter l&apos;efficacité du traitement sur la perte de poids. Une consommation modérée est recommandée.
      </p>

      <h3>L&apos;Ozempic est-il compatible avec d&apos;autres médicaments ?</h3>
      <p>
        L&apos;Ozempic peut interagir avec certains traitements, notamment les sulfamides hypoglycémiants et l&apos;insuline (risque accru d&apos;hypoglycémie). Le ralentissement de la vidange gastrique peut aussi affecter l&apos;absorption d&apos;autres médicaments oraux. Signalez toujours l&apos;ensemble de vos traitements en cours à votre médecin et à votre pharmacien.
      </p>

      <h3>Qui ne doit pas prendre l&apos;Ozempic ?</h3>
      <p>
        L&apos;Ozempic est contre-indiqué chez les patients ayant des antécédents personnels ou familiaux de carcinome médullaire de la thyroïde, ou atteints de néoplasie endocrinienne multiple de type 2 (NEM 2). Il n&apos;est pas non plus recommandé chez les femmes enceintes ou allaitantes, ni chez les patients diabétiques de type 1 ou souffrant d&apos;acidocétose diabétique.
      </p>

      <h3>Combien de kilos perd-on par mois avec l&apos;Ozempic ?</h3>
      <p>
        La perte de poids est progressive. Sur la base des etudes cliniques, on observe en moyenne 1 à 3 kg par mois selon le dosage et le profil du patient. Les résultats les plus significatifs apparaissent entre le 3e et le 6e mois, une fois la dose cible atteinte. Attention : chaque cas est différent, et la perte de poids dépend aussi de l&apos;alimentation et de l&apos;activité physique.
      </p>

      {/* CTA final */}
      <div className="mt-12 rounded-xl border-2 border-teal bg-teal-light/30 p-6 text-center sm:p-8">
        <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          Vous envisagez un traitement GLP-1 ?
        </p>
        <p className="mt-2 text-muted-foreground">
          Consultez votre médecin traitant pour évaluer si l&apos;Ozempic ou un autre agoniste du GLP-1 est adapté à votre situation. Seul un professionnel de santé peut établir une prescription.
        </p>
        <a
          href="/"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Découvrir nos guides GLP-1
        </a>
      </div>

      {/* Articles connexes */}
      <div className="mt-12">
        <h2 className="font-heading text-xl font-bold text-foreground">À lire aussi</h2>
        <div className="mt-4 space-y-3">
          <a
            href="/wegovy-guide-complet-prix-avis-effets-secondaires"
            className="block rounded-lg border border-border p-4 transition-colors hover:border-teal hover:bg-surface"
          >
            <p className="text-sm font-semibold text-foreground">Wegovy : Prix, Avis, Effets Secondaires en 2026</p>
            <p className="mt-1 text-xs text-muted-foreground">Guide complet sur le sémaglutide 2,4 mg pour la perte de poids : prix, remboursement et posologie.</p>
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

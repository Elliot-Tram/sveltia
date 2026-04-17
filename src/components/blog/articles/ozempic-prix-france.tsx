import { CalloutBox } from "@/components/blog/callout-box";

export function OzempicPrixFrance() {
  return (
    <>
      <CalloutBox variant="retenir" title="À retenir">
        <ul>
          <li>
            L&apos;Ozempic coûte entre <strong>90 et 120 euros par mois</strong> en France sans remboursement pour une utilisation dans la perte de poids.
          </li>
          <li>
            Il est <strong>remboursé à 65 % par la Sécurité sociale</strong> uniquement dans le cadre du diabète de type 2, sur prescription médicale.
          </li>
          <li>
            Les prix varient selon le dosage : stylo 0,25/0,5 mg (~50 €), stylo 1 mg (~70 €), stylo 2 mg (~100 €) — prix public indicatif avant remboursement.
          </li>
          <li>
            <strong>Wegovy (sémaglutide à doses plus élevées)</strong> est la version officiellement approuvée pour l&apos;obésité, mais son accès reste limité en France début 2026.
          </li>
          <li>
            Des <strong>ruptures de stock récurrentes</strong> affectent l&apos;approvisionnement depuis 2023, ce qui peut compliquer l&apos;accès même pour les patients diabétiques.
          </li>
        </ul>
      </CalloutBox>

      {/* Section 1 */}
      <h2 id="prix-ozempic-france">Prix de l&apos;Ozempic en France en 2026</h2>

      <p>
        Le prix de l&apos;Ozempic varie en fonction du dosage et de votre situation vis-à-vis du remboursement. En France, l&apos;Ozempic est commercialisé sous forme de stylos injectables préremplis par Novo Nordisk.
      </p>

      <table>
        <thead>
          <tr>
            <th>Dosage</th>
            <th>Prix public (indicatif)</th>
            <th>Prix remboursé (diabète T2)</th>
            <th>Prix sans remboursement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ozempic 0,25 mg / 0,5 mg (stylo 4 doses)</td>
            <td>~50 €</td>
            <td>~17,50 € (65 % remboursé)</td>
            <td>~50 €/mois</td>
          </tr>
          <tr>
            <td>Ozempic 1 mg (stylo 4 doses)</td>
            <td>~70 €</td>
            <td>~24,50 € (65 % remboursé)</td>
            <td>~70 €/mois</td>
          </tr>
          <tr>
            <td>Ozempic 2 mg (stylo 4 doses)</td>
            <td>~100 €</td>
            <td>~35 € (65 % remboursé)</td>
            <td>~100 €/mois</td>
          </tr>
        </tbody>
      </table>

      <p>
        Ces prix sont indicatifs. Le prix réel en pharmacie peut légèrement varier. L&apos;Ozempic n&apos;est pas disponible sans ordonnance — une prescription médicale est obligatoire dans tous les cas.
      </p>

      {/* Section 2 */}
      <h2 id="remboursement-ozempic">Qui peut se faire rembourser l&apos;Ozempic ?</h2>

      <p>
        En France, l&apos;Ozempic est remboursé à 65 % par l&apos;Assurance Maladie <strong>uniquement dans le cadre du traitement du diabète de type 2</strong>. Les conditions sont précises :
      </p>

      <ul>
        <li>Diagnostic de diabète de type 2 établi par un médecin.</li>
        <li>HbA1c insuffisamment contrôlée par les traitements oraux (metformine, sulfamides...) à dose maximale tolérée.</li>
        <li>Prescription initiale par un diabétologue ou un endocrinologue, renouvelable par le médecin traitant.</li>
      </ul>

      <p>
        Pour la <strong>perte de poids seule</strong>, sans diabète associé, l&apos;Ozempic n&apos;est pas remboursé. C&apos;est d&apos;ailleurs dans cette indication que la controverse a éclaté : des personnes non diabétiques se faisaient prescrire l&apos;Ozempic hors AMM pour perdre du poids, créant des tensions d&apos;approvisionnement pour les patients diabétiques qui en ont médicalement besoin.
      </p>

      <CalloutBox variant="attention" title="Important">
        <p>
          L&apos;Ozempic prescrit en dehors de l&apos;indication officielle (diabète de type 2) ne bénéficie d&apos;aucun remboursement et engage la responsabilité du prescripteur. Le <a href="https://www.has-sante.fr" target="_blank" rel="noopener noreferrer">Haute Autorité de Santé (HAS)</a> déconseille cette pratique.
        </p>
      </CalloutBox>

      {/* Section 3 */}
      <h2 id="ozempic-vs-wegovy-prix">Ozempic vs Wegovy : quel est le moins cher pour la perte de poids ?</h2>

      <p>
        Wegovy est la version officiellement approuvée du sémaglutide pour le traitement de l&apos;obésité. Même molécule que l&apos;Ozempic, mais à des doses plus élevées (jusqu&apos;à 2,4 mg par semaine) et avec une indication AMM spécifique pour la perte de poids.
      </p>

      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Ozempic</th>
            <th>Wegovy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indication officielle</td>
            <td>Diabète de type 2</td>
            <td>Obésité (IMC ≥ 30) ou surpoids (IMC ≥ 27) + comorbidités</td>
          </tr>
          <tr>
            <td>Dose maximale</td>
            <td>2 mg/semaine</td>
            <td>2,4 mg/semaine</td>
          </tr>
          <tr>
            <td>Remboursement en France</td>
            <td>Oui (diabète T2 uniquement)</td>
            <td>Non (début 2026)</td>
          </tr>
          <tr>
            <td>Prix mensuel sans remboursement</td>
            <td>50-100 €</td>
            <td>180-350 €</td>
          </tr>
          <tr>
            <td>Disponibilité en France</td>
            <td>Disponible (ruptures occasionnelles)</td>
            <td>Accès limité — déploiement progressif</td>
          </tr>
          <tr>
            <td>Perte de poids moyenne (études)</td>
            <td>~10-12 % du poids corporel</td>
            <td>~15-17 % du poids corporel</td>
          </tr>
        </tbody>
      </table>

      <p>
        En 2026, pour quelqu&apos;un qui cherche un traitement GLP-1 en France pour la perte de poids, Wegovy reste la voie légale et éthique. Mais son coût élevé (180 à 350 euros par mois) et sa disponibilité encore limitée en font une option inaccessible pour beaucoup.
      </p>

      {/* Section 4 */}
      <h2 id="ruptures-stock">Le problème des ruptures de stock</h2>

      <p>
        Depuis 2023, l&apos;Ozempic connaît des ruptures de stock récurrentes en France et dans toute l&apos;Europe. La cause : une demande qui a explosé — notamment du fait de l&apos;utilisation hors AMM pour la perte de poids, popularisée par les réseaux sociaux et des célébrités américaines.
      </p>

      <p>
        L&apos;ANSM (Agence nationale de sécurité du médicament) a pris plusieurs mesures :
      </p>

      <ul>
        <li>Limitation des prescriptions initiales aux spécialistes (diabétologues, endocrinologues).</li>
        <li>Mise en place d&apos;une liste de patients prioritaires pour les stocks disponibles.</li>
        <li>Interdiction d&apos;export hors de France.</li>
      </ul>

      <p>
        Si vous êtes patient diabétique et que vous ne trouvez plus votre Ozempic en pharmacie, plusieurs alternatives thérapeutiques existent (dulaglutide/Trulicity, liraglutide/Victoza, exenatide). Discutez-en avec votre diabétologue.
      </p>

      {/* Section 5 */}
      <h2 id="obtenir-ordonnance">Comment obtenir une ordonnance pour l&apos;Ozempic ?</h2>

      <p>
        Pour un patient diabétique de type 2 : parlez à votre médecin traitant ou votre diabétologue. Si l&apos;Ozempic est adapté à votre situation (HbA1c mal contrôlée, surpoids associé, risque cardiovasculaire), il peut vous le prescrire.
      </p>

      <p>
        Pour quelqu&apos;un qui souhaite l&apos;utiliser pour la perte de poids sans diabète : la voie légale est de consulter un médecin spécialisé en obésité (endocrinologue, médecin nutritionniste) et de discuter de Wegovy si votre IMC est ≥ 30 ou ≥ 27 avec comorbidités.
      </p>

      <p>
        Les téléconsultations de certaines plateformes proposent des consultations avec des médecins spécialisés en gestion du poids. C&apos;est une option légitime pour obtenir un suivi médical adapté.
      </p>

      <CalloutBox variant="info" title="À noter">
        <p>
          Les prescriptions d&apos;Ozempic ou de Wegovy via des sites en ligne non réglementés ou sans consultation médicale réelle sont illégales et dangereuses. Ces médicaments nécessitent un suivi médical — effets secondaires, contre-indications, interactions médicamenteuses — qui ne peut pas être assuré sans consultation.
        </p>
      </CalloutBox>

      {/* Section 6 */}
      <h2 id="comparaison-glp1">Comparatif des traitements GLP-1 disponibles en France</h2>

      <table>
        <thead>
          <tr>
            <th>Médicament</th>
            <th>Molécule</th>
            <th>Prix/mois (indicatif)</th>
            <th>Remboursement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ozempic</td>
            <td>Sémaglutide</td>
            <td>50-100 €</td>
            <td>Oui (diabète T2)</td>
          </tr>
          <tr>
            <td>Wegovy</td>
            <td>Sémaglutide (dose élevée)</td>
            <td>180-350 €</td>
            <td>Non (début 2026)</td>
          </tr>
          <tr>
            <td>Victoza</td>
            <td>Liraglutide 1,2/1,8 mg</td>
            <td>~80 €</td>
            <td>Oui (diabète T2)</td>
          </tr>
          <tr>
            <td>Trulicity</td>
            <td>Dulaglutide</td>
            <td>~70 €</td>
            <td>Oui (diabète T2)</td>
          </tr>
          <tr>
            <td>Mounjaro</td>
            <td>Tirzépatide</td>
            <td>150-300 €</td>
            <td>Oui (diabète T2, remboursement partiel)</td>
          </tr>
          <tr>
            <td>Rybelsus</td>
            <td>Sémaglutide oral</td>
            <td>~90 €</td>
            <td>Oui (diabète T2)</td>
          </tr>
        </tbody>
      </table>

      {/* Section FAQ */}
      <h2 id="faq-prix">Questions fréquentes sur le prix de l&apos;Ozempic</h2>

      <h3 id="ozempic-pharmacie-prix">Quel est le prix exact de l&apos;Ozempic en pharmacie ?</h3>
      <p>
        Le prix de l&apos;Ozempic en pharmacie varie entre 50 et 100 euros par stylo selon le dosage. Sans remboursement, le coût mensuel est d&apos;environ 50 à 100 euros. Avec remboursement Sécurité sociale (diabète T2), il tombe à 17,50-35 euros par mois avant mutuelle.
      </p>

      <h3 id="mutuelle-rembourse-ozempic">Ma mutuelle peut-elle rembourser l&apos;Ozempic ?</h3>
      <p>
        Oui, si vous avez une prise en charge Sécurité sociale (diabète T2), certaines mutuelles remboursent tout ou partie du ticket modérateur restant. Pour l&apos;utilisation hors remboursement (perte de poids sans diabète), la prise en charge par la mutuelle est rare et dépend des contrats.
      </p>

      <h3 id="ozempic-moins-cher-etranger">L&apos;Ozempic est-il moins cher à l&apos;étranger ?</h3>
      <p>
        Les prix varient selon les pays. Aux États-Unis, l&apos;Ozempic sans assurance coûte plus de 800 dollars par mois — bien plus qu&apos;en France. En Allemagne et en Espagne, les prix sont proches des tarifs français. Commander à l&apos;étranger est légalement complexe et potentiellement risqué (contrefaçons, produits non conformes).
      </p>
    </>
  );
}

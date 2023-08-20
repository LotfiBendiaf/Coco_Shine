import React, { useState, useEffect } from  "react" ;
import Link from  "next/link";


const Terms = () => {
  

  return (
    <div className="terms">
        <h1>Termes et conditions d utilisation</h1>
      <p>
      Bien sûr, voici quelques exemples concrets d informations que vous devriez inclure sur votre site e-commerce pour aborder les considérations de protection des consommateurs et légales, en français :
      </p>

      <ol>
        <li>
            <b>**Descriptions de Produits et Tarification :**</b>
            <p>
                Descriptions claires et détaillées des caractéristiques, spécifications et avantages du produit.
                Tarification précise, y compris les remises, taxes et frais éventuels.
                Exemple : Le produit X est une gourde en acier inoxydable de haute qualité d une capacité de 24 oz. Prix : 25,99 € (toutes taxes comprises).
            </p>
        </li>
        <li>
            <b>**Politiques de Remboursement et de Retour :**</b>
            <p>
                Politiques clairement définies concernant les retours, remboursements, échanges et annulations.
                Délai de retour et éventuels frais de réapprovisionnement.
                Exemple : Si vous n êtes pas satisfait de votre achat, vous pouvez le retourner dans les 30 jours pour un remboursement complet. Des frais de réapprovisionnement de 10 % peuvent s appliquer aux produits ouverts.
            </p>
       
        </li>
        <li>
            <b>**Informations sur la Livraison :**</b>
            <p>     
               - Délais de livraison estimés et options d expédition (standard, express, etc.).
               - Coûts d expédition en fonction de la localisation et de la méthode choisie.
               - Exemple : Les commandes sont généralement expédiées sous 2 jours ouvrables. Les frais d expédition standard sont de 5,99 € pour les commandes nationales et de 15,99 € pour les commandes internationales.
            </p>
        </li>
        <li>
            <b>**Politique de Confidentialité :**</b>
            <p>
            - Détails sur la collecte, l utilisation et la protection des données des clients.
            - Informations sur les cookies et les technologies de suivi utilisées sur le site.
            - Exemple : Nous collectons votre nom, votre adresse e-mail et vos informations de livraison pour le traitement des commandes. Vos données sont stockées en toute sécurité et ne seront jamais partagées avec des tiers.
            </p>
        </li>
        <li>
            <b>**Conditions Générales de Vente :**</b>
            <p>
            - Explication de l accord entre le client et le site e-commerce.
            - Loi applicable et juridiction en cas de litiges.
            - Exemple : En passant une commande sur notre site, vous acceptez nos conditions générales de vente. Tout litige sera réglé conformément aux lois de [Juridiction] et à la juridiction exclusive des [Tribunaux].
            </p>
        </li>
        <li>
            <b>**Sécurité des Paiements :**</b>
            <p>
               - Assurance d un traitement sécurisé des paiements et respect des normes PCI DSS.
               - Méthodes de chiffrement utilisées pour protéger les informations de paiement des clients.
               - Exemple : Nous utilisons un chiffrement SSL pour garantir la sécurité de vos informations de paiement. Les détails de votre carte de crédit ne sont jamais stockés sur nos serveurs.
            </p>
        </li>
        <li>
            <b>**Coordonnées de Contact :**</b>
            <p>
               - Coordonnées facilement accessibles pour le support client et les demandes d information.
               - Exemple : Des questions ? Contactez notre équipe du service client à l adresse [adresse e-mail] ou appelez-nous au [numéro de téléphone].
            </p>
        </li>
        <li>
            <b>**Protection de la Vie Privée des Enfants :**</b>
            <p>
            
               - Déclaration indiquant que le site n est pas destiné à être utilisé par les enfants en dessous d un certain âge (par exemple, 13 ans) et que le consentement parental est requis pour ceux en dessous de cet âge spécifié.
               - Exemple : Notre site n est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d informations personnelles auprès d enfants sans le consentement parental.

            </p>
        </li>
        <li>
            <b>**Droits et Recours des Consommateurs :**</b>
            <p>
               - Explication des droits des consommateurs en vertu des lois applicables, comme le droit à un remboursement pour les produits défectueux.
               - Exemple : Vous avez le droit de demander un remboursement ou un remplacement pour les produits défectueux ou non conformes à la description. Veuillez nous contacter dans les 14 jours suivant la réception du produit.
            </p>
        </li>
        <li>
            <b>**Résolution des Litiges :**</b>
            <p>
               - Description du processus de résolution des plaintes ou des litiges des clients.
               - Mention de toute méthode de règlement alternatif des litiges, telle que la médiation ou l arbitrage.
               - Exemple : En cas de litiges, nous vous encourageons à contacter d abord notre service client. Si une résolution ne peut pas être atteinte, nous pouvons envisager la médiation comme moyen de règlement alternatif des litiges.
            </p>
        </li>
        
      </ol>
    </div>
  )
}

export default Terms
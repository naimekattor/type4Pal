import React, { useEffect } from "react";
import { BiArrowFromLeft, BiHome } from "react-icons/bi";
import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const TermsPage = () => {
  return (
    <div className="2xl:max-w-[1536px] xl:max-w-7xl lg:max-w-[992px] md:max-w-[768px] md:mx-auto mx-4 space-y-4 py-8 ">
      {/* <div className="bg-white shadow-2xl py-2 px-4  flex items-center gap-4">
        <span className="flex items-center gap-4 text-[30px]"><Link to={'/'}><FaHome/></Link> <FaLongArrowAltRight/></span><span>Terms and Conditions</span>
      </div> */}
      <h3 className="text-[20px] font-bold text-center">
        Terms and Conditions
      </h3>
      <h3 className="text-[20px] font-medium ">Introduction</h3>
      <p>
        DSGNX INC., an Alberta corporation, owns and operates the Type4Pal
        mobile application and the website located at type4pal.com. These Terms
        and Conditions form a legally binding agreement between you and DSGNX
        INC. when you access, download, install, or use any part of the Type4Pal
        platform. Please read them carefully because your continued use of the
        service signifies your acceptance of every provision contained here.
      </p>
      <h3 className="text-[20px] font-medium ">Acceptance of the Agreement</h3>
      <p>
        By creating an account, submitting information, or simply browsing our
        content, you confirm that you are at least the age of majority in your
        jurisdiction, that you have the legal capacity to form a contract, and
        that you have understood and agreed to be bound by these Terms. If you
        do not agree, you must not access or use the service.
      </p>
      <h3 className="text-[20px] font-medium ">
        Purpose and Informational Nature of the Service
      </h3>
      <p>
        Type4Pal is designed to provide personalised hair‑care guidance for
        people with Type 4 natural hair. Its routines, styling suggestions,
        ingredient alerts, and product recommendations are generated through a
        combination of machine‑learning models, user‑supplied information, and
        ingredient data publicly declared on e‑commerce sites, brand pages, and
        other third‑party sources. This process is inherently fallible. Product
        labels may be incomplete, outdated, or inaccurate, and our algorithms
        can misinterpret data or your goals. The guidance you receive is
        therefore informational only and should never replace professional
        dermatological, medical, or cosmetic advice. You assume full
        responsibility for verifying product suitability, patch‑testing new
        products, consulting qualified professionals where needed, and reading
        the latest ingredient lists provided by manufacturers.
      </p>
      <h3 className="text-[20px] font-medium ">No Professional Advice</h3>
      <p>
        Nothing in the App constitutes medical, dermatological, nutritional, or
        legal advice. We do not diagnose conditions, prescribe treatments, or
        guarantee results. If you experience irritation, allergic reactions, or
        any adverse event, discontinue use immediately and seek advice from a
        qualified professional. Reliance on any information provided by Type4Pal
        is strictly at your own risk.
      </p>
      <h3 className="text-[20px] font-medium ">User‑Provided Content</h3>
      <p>
        You may upload photographs, text entries, location information, and
        other materials so the App can tailor recommendations. You represent
        that you have all necessary rights to provide that content and that it
        does not infringe any third‑party rights or violate any law. You grant
        DSGNX INC. a worldwide, royalty‑free licence to use, store, reproduce,
        modify, and analyse your content solely for the purposes of operating
        and improving the service
      </p>
      <h3 className="text-[20px] font-medium ">
        Third‑Party Products and Links
      </h3>
      <p>
        Type4Pal displays references, hyperlinks, and affiliate buttons that
        lead to products on external platforms such as Amazon, Sephora, Jumia,
        and other retailers. These links are offered for convenience. DSGNX INC.
        does not manufacture, sell, or endorse those products, cannot guarantee
        their availability or authenticity, and is not responsible for any
        transaction you enter with a third‑party seller. Always review the
        merchant’s own terms and policies before purchasing.
      </p>
      <h3 className="text-[20px] font-medium ">Intellectual Property</h3>
      <p>
        All software, text, graphics, logos, trademarks, and other content
        created by DSGNX INC. remain the exclusive property of DSGNX INC. or its
        licensors. You receive a limited, revocable, non‑transferable licence to
        use the App for personal, non‑commercial purposes. Any copying,
        modification, distribution, or reverse engineering of the service or its
        components is prohibited unless expressly permitted in writing.
      </p>
      <h3 className="text-[20px] font-medium ">
        Service Availability and Updates
      </h3>
      <p>
        We reserve the right to modify, suspend, or discontinue any feature or
        the entire service at any time without liability. Updates may
        automatically download and install on your device. Continued use after
        an update constitutes acceptance of the modified service.
      </p>
      <h3 className="text-[20px] font-medium ">Disclaimer of Warranties</h3>
      <p>
        The App and all content are provided "as is" and "as available" without
        any warranties of any kind, whether express or implied, including but
        not limited to accuracy, reliability, merchantability, fitness for a
        particular purpose, and non‑infringement. DSGNX INC. does not warrant
        that the service will be uninterrupted, error‑free, or secure, or that
        any defects will be corrected.
      </p>
      <h3 className="text-[20px] font-medium ">Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by applicable law, DSGNX INC., its
        officers, directors, employees, and agents shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        for any loss of profits, revenues, data, goodwill, or other intangible
        losses arising out of or relating to your use of or inability to use the
        service. Where liability cannot be excluded, it is limited to the
        greater of the amount you paid for the service during the preceding
        twelve months or fifty Canadian dollars.
      </p>
      <h3 className="text-[20px] font-medium ">Indemnification</h3>
      <p>
        You agree to indemnify and hold harmless DSGNX INC. from and against any
        claims, damages, losses, or expenses (including legal fees) arising out
        of your breach of these Terms, your misuse of the service, or your
        violation of any law or the rights of a third party.
      </p>
      <h3 className="text-[20px] font-medium ">Termination</h3>
      <p>
        We may suspend or terminate your account at any time without notice if
        we believe you have violated these Terms or engaged in conduct that
        harms other users, DSGNX INC., or third parties. Upon termination the
        licence granted to you shall cease and you must uninstall the App.
      </p>
      <h3 className="text-[20px] font-medium ">
        Governing Law and Dispute Resolution
      </h3>
      <p>
        This Agreement is governed by the laws of the Province of Alberta and
        the federal laws of Canada applicable in Alberta, without regard to
        conflict‑of‑laws rules. Any dispute that cannot be resolved informally
        shall be submitted to the exclusive jurisdiction of the courts located
        in Calgary, Alberta. Nothing prevents you from exercising any mandatory
        statutory rights available under the consumer protection laws of your
        country of residence.
      </p>
      <h3 className="text-[20px] font-medium ">Severability</h3>
      <p>
        If any provision of these Terms is held to be invalid or unenforceable
        by a court of competent jurisdiction, the remaining provisions will
        remain in full force and effect.
      </p>
      <h3 className="text-[20px] font-medium ">Entire Agreemen</h3>
      <p>
        These Terms constitute the entire agreement between you and DSGNX INC.
        regarding the service and supersede any prior oral or written
        understandings. Any waiver of a provision must be in writing and signed
        by DSGNX INC. A failure to enforce any provision on one occasion is not
        a waiver of future enforcement.
      </p>
      <h3 className="text-[20px] font-medium ">Contact</h3>
      <p>
        If you have questions about these Terms, please email hello@type4pal.com
        or write to DSGNX INC., Alberta, Canada
      </p>
    </div>
  );
};

export default TermsPage;

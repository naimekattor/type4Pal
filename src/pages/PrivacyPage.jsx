import React, { useEffect } from "react";
import { BiArrowFromLeft, BiHome } from "react-icons/bi";
import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const PrivacyPage = () => {
  return (
    <div className="2xl:max-w-[1536px] xl:max-w-7xl lg:max-w-[992px] md:max-w-[768px] md:mx-auto mx-4 space-y-4 py-8 ">
      {/* <div className="bg-white shadow-2xl py-2 px-4  flex items-center gap-4">
        <span className="flex items-center gap-4 text-[30px]"><Link to={'/'}><FaHome/></Link> <FaLongArrowAltRight/></span><span>Privacy plicy</span>
      </div> */}
      <h3 className="text-[20px] font-bold text-center">Privacy Policy</h3>
      <p>
        DSGNX INC., an Alberta corporation, produces and maintains the Type4Pal
        mobile application and website (collectively, the "App"). Type4Pal is a
        personalized hair‑care companion created to empower people with Type 4
        natural hair; coily, kinky, and tightly curled textures that are most
        common in the African diaspora, to understand their hair, build
        science‑based routines, and discover suitable products and stylists.
        Through a guided diagnostic quiz, optional image analysis,
        geolocation‑aware product search, and an AI‑driven routine builder, the
        App profiles each user's hair attributes, environmental factors, and
        goals in order to generate individualized recommendations. Because this
        service necessarily involves the processing of intimate data—ranging
        from demographic details to high‑resolution hair photographs—we
        recognise the highest duty to protect that information. This Privacy
        Policy explains how DSGNX INC. ("we," "us," or "our") collects, uses,
        discloses, and safeguards your personal information in accordance with
        Alberta's Personal Information Protection Act (PIPA), Canada's Personal
        Information Protection and Electronic Documents Act (PIPEDA), and all
        other global privacy regimes that apply to our diverse user base. By
        accessing or using the App, you acknowledge that you have read,
        understood, and agreed to the practices described in this Policy. ("we,"
        "us," "our"), we deeply value and prioritize your privacy. This Privacy
        Policy outlines our practices regarding the collection, use, disclosure,
        and protection of your personal information when you use our website,
        type4pal.com, and our mobile application, Type4Pal. DSGNX INC. is
        registered in Alberta, Canada, and is committed to compliance with all
        applicable privacy laws in Canada, including Alberta’s Personal
        Information Protection Act (PIPA) and the federal Personal Information
        Protection and Electronic Documents Act (PIPEDA), as well as global
        standards such as the General Data Protection Regulation (GDPR) for
        users based in the European Economic Area (EEA), and the California
        Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) for
        users based in California. By accessing our services, you consent to the
        practices described in this Privacy Policy. For any questions or
        concerns regarding your privacy or this policy, please contact us at
        hello@type4pal.com.
      </p>
      <h3 className="text-[20px] font-medium ">
        Information Collection and Use
      </h3>
      <p>
        When you use Type4Pal, we collect various types of personal data that
        allow us to deliver personalized hair care insights and recommendations
        specifically tailored for type 4 hair. Such data may include your name,
        email address, demographic information, user preferences, hair type
        details, product usage patterns, and any uploaded content including
        images used to analyze hair characteristics. This information is
        essential to provide customized hair care routines, recommend products,
        improve app functionality, and enhance user experience. We may also
        collect information automatically, including IP addresses, browser
        types, operating systems, and usage data, which help us improve our
        services and ensure optimal performance
      </p>
      <h3 className="text-[20px] font-medium ">
        Cookies and Similar Technologies
      </h3>
      <p>
        Our website and app utilize cookies, web beacons, and other similar
        technologies to enhance user experience, analyze site traffic, and track
        user engagement. You can manage your preferences or disable cookies in
        your browser settings, though this may affect functionality and access
        to certain features of our services.
      </p>
      <h3 className="text-[20px] font-medium ">Data Sharing and Disclosure</h3>
      <p>
        We will never sell your personal data. However, we may share your data
        with trusted third-party partners essential to our operations, including
        payment processors, hosting providers, analytics providers, and
        marketing services, all of whom are obligated to maintain the
        confidentiality of your data and adhere to strict privacy standards. We
        may also disclose your personal information if required by law,
        regulation, or governmental authority, or if necessary to protect our
        rights, safety, or property, or that of others.
      </p>
      <h3 className="text-[20px] font-medium ">International Data Transfers</h3>
      <p>
        Given the global nature of our service, your data may be transferred and
        processed in countries other than your own, including the United States
        and European countries. We ensure adequate safeguards are implemented to
        protect your data in compliance with relevant international privacy
        standards such as GDPR. We use standard contractual clauses and other
        legally recognized transfer mechanisms to ensure the lawful transfer of
        data.
      </p>
      <h3 className="text-[20px] font-medium ">
        Jurisdiction‑Specific Disclosures
      </h3>
      <p>
        Because the Type4Pal community spans the globe, we supplement this
        Policy with jurisdiction‑specific disclosures that clarify local privacy
        rights, complaint avenues, and regulatory references in regions where
        the majority of our users with Type 4 hair reside or where privacy law
        imposes distinct obligations.
        <ul className="space-y-4 py-4">
          <li>
            ● Canada (Alberta and Federal). This Policy is intended to satisfy
            the notice requirements of Alberta’s PIPA and Canada’s PIPEDA.
            Alberta users who believe their personal information has been
            mishandled may file a complaint with the Office of the Information
            and Privacy Commissioner of Alberta (www.oipc.ab.ca).
          </li>
          <li>
            ● United States. While federal comprehensive privacy legislation has
            not yet been enacted, several state laws apply. If you reside in
            California, Colorado, Connecticut, Utah, or Virginia you are
            entitled to the disclosures, opt‑out mechanisms, and
            non‑discrimination protections provided by the CCPA/CPRA, CPA,
            CTDPA, UCPA, and VCDPA respectively. We honour Global Privacy
            Control (GPC) signals to facilitate state‑law opt‑outs of "sale" or
            "sharing".
          </li>
          <li>
            ● European Economic Area. We act as a "controller" of your personal
            data under the General Data Protection Regulation. Our EU
            representative under Article 27 GDPR is DataRep, 107‑111 Fleet
            Street, London, EC4A 2AB, United Kingdom. EEA users may lodge
            complaints with their local data‑protection authority.
          </li>
          <li>
            ● United Kingdom. For UK users, we comply with the UK GDPR and the
            Data Protection Act 2018. Our UK representative is also DataRep,
            contactable at the address above.
          </li>
          <li>
            ● Brazil. As required by the Lei Geral de Proteção de Dados (LGPD),
            we rely on consent (Art. 7.I) and legitimate interest (Art. 7.IX) as
            legal bases for processing. Brazilian residents may contact the
            Autoridade Nacional de Proteção de Dados (ANPD) to escalate privacy
            concerns.
          </li>
          <li>
            ● Nigeria. In line with the Nigeria Data Protection Act 2023 (NDPA)
            and the Nigeria Data Protection Regulation 2019, we implement
            organisational and technical security measures appropriate to the
            risk and honour data‑subject rights of access, rectification, and
            erasure. Our data‑protection contact remains hello@type4pal.com.
          </li>
          <li>
            ● South Africa. We comply with the Protection of Personal
            Information Act (POPIA). The Information Regulator
            (www.inforegulator.org.za) oversees POPIA enforcement. You may
            object to processing under Section 11(3) of POPIA.
          </li>
          <li>
            ● Kenya. Kenyan residents are protected by the Data Protection Act
            2019. We have appointed a Data Protection Officer (DPO) reachable at
            hello@type4pal.com.
          </li>
          <li>
            ● Ghana. We abide by applicable provisions of the Data Protection
            Act, 2012 (Act 843) and recognise the Data Protection Commission of
            Ghana as the competent authority.
          </li>
          <li>
            ● Caribbean (Jamaica, Trinidad & Tobago, Barbados). Where national
            data‑protection statutes such as Jamaica’s Data Protection Act 2020
            or Trinidad & Tobago’s Data Protection Act 2022 apply, we process
            personal information in accordance with the eight fundamental
            privacy principles and users may exercise equivalent rights of
            access, correction, and deletion. This list is not exhaustive. If
            your jurisdiction provides stronger privacy rights than those
            described in this Policy, we will extend those stronger rights to
            you whenever legally required.
          </li>
        </ul>
      </p>
      <h3 className="text-[20px] font-medium ">Your Rights and Choices</h3>
      <p>
        Depending on your jurisdiction, you may have specific rights concerning
        your personal information: ● Canada and Alberta Residents: You may
        request access to your personal data and corrections to inaccuracies.
        You may also withdraw consent to data processing subject to applicable
        laws. ● European Economic Area (GDPR): You have the right to access,
        rectify, erase, restrict processing, object to processing, and request
        data portability. You also have the right to lodge a complaint with a
        supervisory authority if you believe your rights have been infringed. ●
        California (CCPA/CPRA): You have the right to know what data is
        collected, request deletion, opt-out of data sharing, and not be
        discriminated against for exercising these rights. To exercise these
        rights, please contact us at hello@type4pal.com. We will respond to your
        request within the legally mandated timeframe.
      </p>
      <h3 className="text-[20px] font-medium ">Data Retention and Security</h3>
      <p>
        We retain your personal data only as long as necessary to fulfill the
        purposes outlined in this Privacy Policy or as required by law. We
        implement robust security measures, including encryption, access
        controls, and secure servers, to safeguard your data against
        unauthorized access, disclosure, alteration, or destruction.
      </p>
      <h3 className="text-[20px] font-medium ">Children’s Privacy</h3>
      <p>
        Type4Pal services are not intended for individuals under the age of 13,
        and we do not knowingly collect personal data from children under this
        age. If we become aware that we have inadvertently collected personal
        information from a child under the age of 13, we will promptly delete
        it.
      </p>
      <h3 className="text-[20px] font-medium ">Updates to this Policy</h3>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices or legal requirements. We encourage you to review this policy
        regularly. Updates will be posted on our website, and where material
        changes occur, we will notify you by email or through in-app
        notifications.
      </p>
      <h3 className="text-[20px] font-medium ">Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please contact us at: Email:
        hello@type4pal.com Address: DSGNX INC., Alberta, Canada Your privacy and
        trust are paramount to us, and we are committed to maintaining the
        highest standards in data protection
      </p>
    </div>
  );
};

export default PrivacyPage;

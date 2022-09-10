import type { GetStaticProps, NextPage } from 'next'

import commonData from '../source/utils/common.json'


import Link from 'next/link'

import { sendFullLoader } from '../source/controllers/LoadingCtrl'

import { sendMiniMessage } from '../source/controllers/MessageCtrl'

import { toast } from 'react-toastify'

import { siteName } from '../source/__env'

import HeadTag from '../source/components/general/HeadTag'

import TopPart from '../source/components/general/top/TopPart'


const Home: NextPage = ({ common }: any) => {

  return (

    <>

      <HeadTag title="" />

      <TopPart common={common} />

      <div>

        Welcome to {siteName}

        <br />

        <Link href="/blog"><a>To Blog</a></Link>

        <br />

        <button onClick={() => sendMiniMessage({ icon: { name: "copy" }, content: { text: "Welcome" } }, 1000)}>Msg Check</button>

        <button onClick={() => sendFullLoader({ text: "Fetching stuffs" }, 1500)}>Load Check</button>

        <button onClick={() => toast("We are toasting")}>Toast Check</button>

        {`Energistically fabricate seamless information before world-class applications. Conveniently communicate frictionless users without extensible communities. Efficiently seize clicks-and-mortar leadership skills and premier deliverables. Energistically productivate interoperable catalysts for change for synergistic expertise. Credibly redefine reliable niches via value-added systems.

        Intrinsicly myocardinate plug-and-play functionalities through state of the art ROI. Completely simplify holistic deliverables without exceptional infrastructures. Continually monetize plug-and-play testing procedures rather than cooperative convergence. Efficiently matrix corporate niches without open-source technologies. Synergistically orchestrate team driven deliverables with distinctive partnerships.

        Energistically predominate client-centric schemas rather than focused leadership. Phosfluorescently network high standards in core competencies rather than enterprise e-tailers. Compellingly maintain e-business value whereas flexible manufactured products. Compellingly engineer effective products rather than covalent sources. Dynamically underwhelm technically sound relationships rather than intuitive e-business.

        Uniquely aggregate multifunctional processes whereas front-end strategic theme areas. Objectively negotiate multimedia based methodologies without seamless intellectual capital. Efficiently transform equity invested interfaces whereas low-risk high-yield materials. Collaboratively productize premium niches before superior applications. Seamlessly revolutionize stand-alone "outside the box" thinking before superior e-services.

        Enthusiastically communicate diverse quality vectors for leading-edge e-markets. Competently re-engineer premier paradigms through strategic networks. Dynamically myocardinate worldwide ROI vis-a-vis impactful methodologies. Energistically incubate principle-centered infrastructures after sticky platforms. Competently leverage other's integrated action items and client-based platforms.

        Conveniently brand revolutionary "outside the box" thinking vis-a-vis scalable markets. Efficiently synthesize granular markets before intermandated portals. Interactively restore optimal functionalities for holistic e-services. Appropriately plagiarize user friendly users without technically sound testing procedures. Professionally reintermediate out-of-the-box metrics after excellent markets.

        Progressively synergize mission-critical resources vis-a-vis an expanded array of metrics. Enthusiastically recaptiualize market-driven supply chains rather than principle-centered resources. Objectively empower wireless systems rather than technically sound systems. Monotonectally underwhelm fully researched relationships whereas covalent customer service. Collaboratively visualize extensive collaboration and idea-sharing after team driven models.

        Professionally streamline distributed services after customer directed niche markets. Distinctively actualize process-centric methodologies rather than progressive services. Phosfluorescently syndicate e-business expertise after viral infrastructures. Efficiently extend multimedia based content after user friendly process improvements. Intrinsicly disintermediate technically sound niches rather than cross-platform potentialities.

        Interactively build market-driven mindshare and sticky convergence. Progressively promote pandemic "outside the box" thinking after state of the art ROI. Distinctively reconceptualize equity invested e-tailers whereas ethical portals. Assertively disseminate parallel infomediaries rather than integrated internal or "organic" sources. Dramatically parallel task resource-leveling channels before high-payoff value.

        Progressively myocardinate e-business leadership vis-a-vis world-class mindshare. Completely incentivize compelling alignments via alternative supply chains. Intrinsicly harness B2B resources through stand-alone partnerships. Authoritatively administrate reliable ideas with focused e-commerce. Professionally benchmark extensive schemas through equity invested vortals.

        Seamlessly redefine multifunctional quality vectors via process-centric data. Conveniently drive backward-compatible e-markets after B2B ideas. Intrinsicly engage mission-critical ideas whereas high-quality imperatives. Compellingly reinvent global processes and magnetic imperatives. Credibly provide access to enterprise-wide methods of empowerment whereas web-enabled opportunities.

        Collaboratively visualize parallel e-markets with leading-edge functionalities. Continually customize standards compliant e-tailers vis-a-vis orthogonal innovation. Authoritatively evolve inexpensive leadership skills vis-a-vis end-to-end niches. Efficiently brand virtual core competencies for open-source products. Quickly cultivate flexible portals and unique opportunities.

        Progressively network.
        Energistically fabricate seamless information before world-class applications. Conveniently communicate frictionless users without extensible communities. Efficiently seize clicks-and-mortar leadership skills and premier deliverables. Energistically productivate interoperable catalysts for change for synergistic expertise. Credibly redefine reliable niches via value-added systems.

        Intrinsicly myocardinate plug-and-play functionalities through state of the art ROI. Completely simplify holistic deliverables without exceptional infrastructures. Continually monetize plug-and-play testing procedures rather than cooperative convergence. Efficiently matrix corporate niches without open-source technologies. Synergistically orchestrate team driven deliverables with distinctive partnerships.

        Energistically predominate client-centric schemas rather than focused leadership. Phosfluorescently network high standards in core competencies rather than enterprise e-tailers. Compellingly maintain e-business value whereas flexible manufactured products. Compellingly engineer effective products rather than covalent sources. Dynamically underwhelm technically sound relationships rather than intuitive e-business.

        Uniquely aggregate multifunctional processes whereas front-end strategic theme areas. Objectively negotiate multimedia based methodologies without seamless intellectual capital. Efficiently transform equity invested interfaces whereas low-risk high-yield materials. Collaboratively productize premium niches before superior applications. Seamlessly revolutionize stand-alone "outside the box" thinking before superior e-services.

        Enthusiastically communicate diverse quality vectors for leading-edge e-markets. Competently re-engineer premier paradigms through strategic networks. Dynamically myocardinate worldwide ROI vis-a-vis impactful methodologies. Energistically incubate principle-centered infrastructures after sticky platforms. Competently leverage other's integrated action items and client-based platforms.

        Conveniently brand revolutionary "outside the box" thinking vis-a-vis scalable markets. Efficiently synthesize granular markets before intermandated portals. Interactively restore optimal functionalities for holistic e-services. Appropriately plagiarize user friendly users without technically sound testing procedures. Professionally reintermediate out-of-the-box metrics after excellent markets.

        Progressively synergize mission-critical resources vis-a-vis an expanded array of metrics. Enthusiastically recaptiualize market-driven supply chains rather than principle-centered resources. Objectively empower wireless systems rather than technically sound systems. Monotonectally underwhelm fully researched relationships whereas covalent customer service. Collaboratively visualize extensive collaboration and idea-sharing after team driven models.

        Professionally streamline distributed services after customer directed niche markets. Distinctively actualize process-centric methodologies rather than progressive services. Phosfluorescently syndicate e-business expertise after viral infrastructures. Efficiently extend multimedia based content after user friendly process improvements. Intrinsicly disintermediate technically sound niches rather than cross-platform potentialities.

        Interactively build market-driven mindshare and sticky convergence. Progressively promote pandemic "outside the box" thinking after state of the art ROI. Distinctively reconceptualize equity invested e-tailers whereas ethical portals. Assertively disseminate parallel infomediaries rather than integrated internal or "organic" sources. Dramatically parallel task resource-leveling channels before high-payoff value.

        Progressively myocardinate e-business leadership vis-a-vis world-class mindshare. Completely incentivize compelling alignments via alternative supply chains. Intrinsicly harness B2B resources through stand-alone partnerships. Authoritatively administrate reliable ideas with focused e-commerce. Professionally benchmark extensive schemas through equity invested vortals.

        Seamlessly redefine multifunctional quality vectors via process-centric data. Conveniently drive backward-compatible e-markets after B2B ideas. Intrinsicly engage mission-critical ideas whereas high-quality imperatives. Compellingly reinvent global processes and magnetic imperatives. Credibly provide access to enterprise-wide methods of empowerment whereas web-enabled opportunities.

        Collaboratively visualize parallel e-markets with leading-edge functionalities. Continually customize standards compliant e-tailers vis-a-vis orthogonal innovation. Authoritatively evolve inexpensive leadership skills vis-a-vis end-to-end niches. Efficiently brand virtual core competencies for open-source products. Quickly cultivate flexible portals and unique opportunities.

        Progressively network.`}

      </div>

    </>

  )

}

export const getStaticProps: GetStaticProps = async (context) => {

  const fetchedCommonData = commonData

  return {

    props: {

      common: fetchedCommonData

    }

  }

}

export default Home

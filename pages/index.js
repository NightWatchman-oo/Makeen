import Head from "next/head";
import Slider from "../components/site/home/imageSlider/Slider";
import Statistics from "../components/site/home/Statistics";
import Bootcamp from "../components/site/home/bootcamp/Bootcamp";
import Features from "../components/site/home/features/Features";
import Courses from "../components/site/home/courses/Courses";
import EstelamVaHamrahsho from "../components/site/home/EstelamVaHamrahSho";
import AskedQuestion from "../components/site/home/AskedQuestion";
import Magazines from "../components/site/home/Magazines";
import Methdology from "../components/site/home/Methodology";
import WhyMakeen from "../components/site/home/WhyMakeen";
import OurMentors from "../components/site/home/ourMentors/OurMentors";
import Makeeniha from "../components/site/home/Makeeniha";
import InstallmentPayment from "../components/site/home/InstallmentPayment";
import RegisterationModal from "../components/site/home/RegisterationModal";
import Loading from "../components/Loading";
import { dehydrate, QueryClient ,useQueries} from '@tanstack/react-query';
import { getBootcampSlider, getCounter, getFeatures, getInstallmentPayment, getSliderImages,getCourses, getMentors, getWhyMakeen } from "../API/API";
export default function home() {
  const results = useQueries({
    queries: [
      { queryKey: ['sliderImages', 1], queryFn: getSliderImages, staleTime: Infinity},
      { queryKey: ['counter', 2], queryFn: getCounter, staleTime: Infinity},
      { queryKey: ['bootcampSlider', 3], queryFn: getBootcampSlider, staleTime: Infinity},
      { queryKey: ['features', 4], queryFn: getFeatures, staleTime: Infinity},
      { queryKey: ['courses', 5], queryFn: getCourses, staleTime: Infinity},
      { queryKey: ['whyBootcamp', 6], queryFn: getWhyMakeen, staleTime: Infinity},
      { queryKey: ['mentors', 7], queryFn: getMentors, staleTime: Infinity},
      { queryKey: ['installmentPayment', 8], queryFn: getInstallmentPayment, staleTime: Infinity},
    ]
  })
  if (results.some(r => r.isLoading)) return <Loading/>
  return (
    <>
      <Head>
        <title>آکادمی مکین</title>
      </Head>
      <RegisterationModal />
      <Slider sliderImage={results[0].data}/>
      <Statistics counter={results[1].data}/>
      <Bootcamp bootcampSlider={results[2].data}/>
      <Features features={results[3].data}/>
      <Courses courses={results[4].data}/>
      <WhyMakeen whyMakeen={results[5].data}/>
      <OurMentors mentors={results[6].data}/>
      <InstallmentPayment installmentPayment={results[7].data}/>
      <Makeeniha />
      <Methdology />
      <AskedQuestion />
      <Magazines />
      <EstelamVaHamrahsho />
    </>
  );
}
export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['sliderImages'], getSliderImages)
  await queryClient.prefetchQuery(['counter'], getCounter)
  await queryClient.prefetchQuery(['bootcampSlider'], getBootcampSlider)
  await queryClient.prefetchQuery(['features'], getFeatures)
  await queryClient.prefetchQuery(['courses'], getCourses)
  await queryClient.prefetchQuery(['whyBootcamp'], getWhyMakeen)
  await queryClient.prefetchQuery(['mentors'], getMentors)
  await queryClient.prefetchQuery(['installmentPayment'], getInstallmentPayment)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
"use client";
import ContentWrapper from "@/app/components/common/ContentWrapper";
import Navbar from "@/app/components/common/Navbar";
import NoticePanel from "@/app/components/common/NoticePanel";
import noticeBg from "../../../../public/notice-bg-hand.png";
import useScreen from "@/app/hooks/useScreen";
import { fullName, sentenceize, titleize } from "@/app/utils/string";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import Link from "next/link";
import { capitalize } from "lodash";
import { MdAdd, MdChevronRight } from "react-icons/md";
import { useTranslation } from "@/app/i18n/client";
import ConsultationCard from "./cards/ConsultationCard";
import QRCard from "./cards/QRCard";
import FollowUpCard from "./cards/FollowUpCard";
import DependentsCard from "./cards/DependentsCard";
import PaymentsCard from "./cards/PaymentsCard";
import MedicationCard from "./cards/MedicationCard";
import FAQCard from "./cards/FAQCard";
import PrivacyCard from "./cards/PrivacyCard";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  const { isMobile, isTablet } = useScreen();
  const { t } = useTranslation(lng);
  const user = {
    first_name: "Juan",
    last_name: "Dela Cruz",
  };
  return (
    <>
      <Navbar lng={lng} />
      <ContentWrapper>
        <NoticePanel
          title={sentenceize(t("im_a_reminder"))}
          subtitle={
            "More description to this reminder 2 lines truncated more info"
          }
          boxProps={{
            style: {
              backgroundImage: `url(${noticeBg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionX: isMobile || isTablet ? "right" : "center",
              backgroundPositionY: "bottom",
            },
          }}
          onButtonClick={() => {
            console.log("asd");
          }}
        />
        <VStack mt="8" alignItems="flex-start" gap="0">
          <Text fontSize="12px" color="primary.700">
            {sentenceize(t("welcome_back"))}!
          </Text>
          <Heading as="h1" size="xl" fontWeight="900" color="primary.700">
            {fullName({
              first_name: user.first_name,
              last_name: user.last_name,
            })}
          </Heading>
        </VStack>
        <HStack mt="24px" gap="3" alignItems="flex-start">
          <VStack w="full" gap="5">
            <ConsultationCard lng={lng} />
            <QRCard lng={lng} />
            <PrivacyCard lng={lng} />
          </VStack>
          <VStack w="full" gap="5">
            <FollowUpCard lng={lng} />
            <DependentsCard lng={lng} />
            <PaymentsCard lng={lng} />
          </VStack>
          <VStack w="full" gap="5">
            <MedicationCard lng={lng} />
            <FAQCard lng={lng} />
          </VStack>
        </HStack>
      </ContentWrapper>
    </>
  );
};

export default Dashboard;

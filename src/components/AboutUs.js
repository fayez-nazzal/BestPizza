import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ColFlex from "./ColFlex";
import InfoFlex from "./InfoFlex";
import InfoHeader from "./InfoHeader";
import InfoP from "./InfoP";
import SectionHeader from "./SectionHeader";

const imageProps = {
  className: "rounded-xl md:mr-4",
  width: 400,
  height: 280,
  placeholder: "blurred",
};

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col justify-center px-16 py-16 about-us"
    >
      <SectionHeader text="عن خدماتنا" />
      <CustomInfoFlex align="self-center xl:self-start">
        <ColFlex>
          <InfoHeader>محضرة من قبل عباقرة البيتزا!</InfoHeader>
          <InfoP>
            طاقمنا مكون من مجموعة من المختصين وعباقرة البيتزا, نجمع الاتقان
            والابداع مع سرعة التحضير, لما تذوق بيست بيـتـزا رح تعرف الطعم
            الحقيقي للبيتزا!
          </InfoP>
        </ColFlex>
        <StaticImage
          alt="professional staff"
          src="../images/professional.jpg"
          {...imageProps}
        />
      </CustomInfoFlex>
      <CustomInfoFlex align="self-center">
        <ColFlex>
          <InfoHeader>صحتك بتهمنا!</InfoHeader>
          <InfoP>
            لا تخاف من COVID-19. قبل ما نوصل اي طلبية بنحرص على انها تكون معقمة
            تماماً, وبهمنا التزام افراد التوصيل بالارشادات الوقائية - مثل ارتداء
            الكمامة والتباعد.
          </InfoP>
        </ColFlex>
        <StaticImage
          alt="sterilization"
          src="../images/sterilization.jpg"
          {...imageProps}
        />
      </CustomInfoFlex>
      <CustomInfoFlex align="self-center xl:self-end">
        <ColFlex>
          <InfoHeader>توصيل صاروخي!</InfoHeader>
          <InfoP>
            بس اطلب, وخلي الباقي علينا, فريقنا بيوصل اي طلبية خلال 10 دقائق
            فقط!, ما رح تستنى ساعات وانت بالجوع.
          </InfoP>
        </ColFlex>
        <StaticImage
          alt="fast deliver"
          src="../images/fastDelivery.jpg"
          {...imageProps}
        />
      </CustomInfoFlex>
    </section>
  );
};

export default AboutUs;

const CustomInfoFlex = (props) => {
  return (
    <InfoFlex bg="red-dark" opacity="80" align={props.align}>
      {props.children}
    </InfoFlex>
  );
};

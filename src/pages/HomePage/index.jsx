import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Input, RatingBar, Slider } from "../../components";
import './index.css'

export default function HomePagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Harsh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center overflow-auto">
          <header className="flex md:flex-col self-stretch justify-between items-center gap-5 p-[9px] bg-gradient">
            <Img src="images/img_png_3.png" alt="pngthree_one" className="jythu_img" />
            <div className="flex sm:flex-col justify-between items-center w-[48%] md:w-full mt-3 pr-1.5 gap-5 py-1.5">
              <div className="flex items-center">
                <Text as="p" className="self-start !text-gray-900">
                  Home
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
              </div>
              <a href="#">
                <Text as="p" className="!text-gray-900">
                  About Us
                </Text>
              </a>
              <a href="#">
                <Text as="p" className="!text-gray-900">
                  Pages
                </Text>
              </a>
              <a href="#">
                <Text as="p" className="!text-gray-900">
                  Contents
                </Text>
              </a>
              <a href="#" className="mr-[3px] sm:mr-0">
                <Text as="p" className="!text-gray-900">
                  Contact Us
                </Text>
              </a>
            </div>
            <div className="flex justify-center items-center w-[15%] md:w-full mt-2 mr-[7px] gap-4 md:mr-0">
              <div className="flex justify-center items-center w-[29%] gap-2.5">
                <div className="flex justify-center items-center w-[51%]">
                  <div className="self-end h-[16px] w-[16px] z-[1] bg-teal-A700 rounded-lg" />
                  <div className="flex flex-col items-start ml-[-15px] relative">
                    <Img
                      src="images/img_shopping_bag_24.svg"
                      alt="shoppingbagtwen"
                      className="h-[24px] w-full md:h-auto"
                    />
                    <Text
                      size="xs"
                      as="p"
                      className="mt-[-11px] ml-[3px] md:ml-0 !text-white-A700 !font-poppins !text-[10.67px] relative"
                    >
                      0
                    </Text>
                  </div>
                </div>
                <Img src="images/img_research_24.svg" alt="researchtwentyf" className="self-start h-[24px] w-[24px]" />
              </div>
              <button
                className="flex gap-1 font-semibold min-w-[143px] rounded-[50px] quote_button"
              >
                GET QUOTE <Img src="images/img_right_arrow_24_outline.svg" className="quote_arrow" alt="right arrow / 24 / Outline" />
              </button>
            </div>
          </header>
          <div className="self-stretch h-[710px] relative">
            <div className="h-[696px] w-full md:h-auto left-0 bottom-0 right-0 top-0 p-1.5 m-auto bg-white-A700 bg-[url(/public/images/img_apresenta_o_modelo.png)] bg-cover bg-no-repeat absolute">
              <div className="flex md:flex-col justify-between items-center w-full mb-20 gap-5 max-w-[1168px]">
                <Img
                  src="images/img_gto_hero_4_img_1.png"
                  alt="gtohero4img_one"
                  className="w-[47%] md:w-full mb-4 object-cover"
                />
                <div className="flex flex-col self-end w-[48%] md:w-full">
                  <div className="flex items-center">
                    <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                    <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                      WELCOME TO JYTHU
                    </Text>
                  </div>
                  <Heading size="5xl" as="h1" className="!text-white-A700">
                    <span className="text-white-A700">
                      <>
                        A Marketing <br />
                      </>
                    </span>
                    <a href="#" className="text-transparent bg-gradient1 bg-clip-text underline">
                      Agency
                    </a>
                    <span className="text-white-A700">&nbsp;To G</span>
                    <span className="text-white-A700">r</span>
                    <span className="text-white-A700">
                      <>
                        ow <br />
                        Your Business
                      </>
                    </span>
                  </Heading>
                  <Text as="p" className="w-[98%] md:w-full mt-4 !text-white-A700_bf">
                    <>
                      We are 100+ professional software engineers with more than 10 year of <br />
                      experience in delivering superior products Believe it because you have <br />
                      seen it. Here are real numbers
                    </>
                  </Text>
                  <div className="flex sm:flex-col justify-between w-[87%] md:w-full mt-[35px] gap-5">
                    <div className="flex">
                      <Button
                        size="3xl"
                        variant="outline"
                        shape="round"
                        color="green_A400_teal_500"
                        className="sm:px-5 text-transparent font-medium bg-gradient1 bg-clip-text min-w-[165px]"
                      >
                        GET STARTED
                      </Button>
                      <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                        <Img src="images/img_arrow_up_right.svg" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-[11px]">
                      <Button
                        variant="outline"
                        shape="circle"
                        color="green_A400_teal_500"
                        className="w-[54px] !border-4 !rounded-[27px]"
                      >
                        <Img src="images/img_vector.png" />
                      </Button>
                      <Heading as="h2" className="!text-white-A700 !font-poppins !font-semibold">
                        WATCH VIDEO
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[27%] bottom-[0.00px] left-[12%] p-[26px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[20px]">
              <div className="flex justify-between items-center w-full gap-5">
                <div className="flex w-full">
                  <div className="flex w-full">
                    <Img src="images/img_ellipse_3.png" alt="circleimage" className="h-[65px] w-[65px] rounded-[50%]" />
                    <Img
                      src="images/img_ellipse_4.png"
                      alt="circleimage_one"
                      className="h-[65px] w-[65px] ml-[-32px] relative rounded-[50%]"
                    />
                  </div>
                  <div className="flex w-full ml-[-32px] relative">
                    <Img
                      src="images/img_ellipse_5.png"
                      alt="circleimage_two"
                      className="h-[65px] w-[65px] rounded-[50%]"
                    />
                    <Img
                      src="images/img_ellipse_6.png"
                      alt="circleimage"
                      className="h-[65px] w-[65px] ml-[-32px] relative rounded-[50%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <Heading size="lg" as="h3" className="!text-transparent !font-poppins bg-gradient1 bg-clip-text">
                    5.4k
                  </Heading>
                  <Text as="p" className="!text-blue_gray-500">
                    Clients Satisfaction
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full mt-[1116px] gap-[94px] mx-auto md:gap-[70px] md:p-5 sm:gap-[47px] max-w-[1242px]">
            <Heading size="3xl" as="h2">
              200+ Trusted Partners
            </Heading>
            <div className="flex flex-col self-stretch gap-[54px] sm:gap-[27px]">
              <div className="flex md:flex-col justify-between gap-5">
                <Img src="images/img_amazon.svg" alt="amazon_one" className="h-[40px] md:w-full" />
                <Img src="images/img_vector_green_500.svg" alt="vector_three" className="h-[40px] md:w-full" />
                <Img src="images/img_slack.svg" alt="slack_one" className="h-[40px] md:w-full" />
                <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[40px] md:w-full" />
                <Img src="images/img_walmart.svg" alt="walmart_one" className="h-[40px] md:w-full" />
              </div>
              <div className="h-px bg-gradient2" />
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-[82px] gap-5 mx-auto md:p-5 max-w-[1308px]">
            <div className="flex flex-col w-[44%] md:w-full gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center">
                  <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                  <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                    ABOUT US
                  </Text>
                </div>
                <Heading size="4xl" as="h2">
                  <>
                    We Want To Give You <br />
                    The Best Service
                  </>
                </Heading>
                <Text size="xl" as="p" className="w-[97%] md:w-full !text-blue_gray-500">
                  <>
                    We are 100+ professional software engineers with more <br />
                    than 10 year of experience in delivering superior products <br />
                    Believe it because you have seen it. Here are real numbers
                  </>
                </Text>
              </div>
              <div className="flex sm:flex-col justify-between items-start w-[89%] md:w-full gap-5">
                <div className="flex flex-col items-start w-[43%] sm:w-full">
                  <Heading size="7xl" as="h3" className="!text-transparent !font-poppins bg-gradient1 bg-clip-text">
                    24
                  </Heading>
                  <Heading
                    size="md"
                    as="h4"
                    className="w-[68%] md:w-full ml-1 md:ml-0 !text-blue_gray-500 !text-[26.65px] !font-bold"
                  >
                    <>
                      Year
                      <br />
                      Experience
                    </>
                  </Heading>
                  <div className="flex mt-[45px]">
                    <Button
                      size="3xl"
                      variant="outline"
                      shape="round"
                      color="green_A400_teal_500"
                      className="sm:px-5 text-transparent font-medium bg-gradient1 bg-clip-text min-w-[165px]"
                    >
                      GET STARTED
                    </Button>
                    <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                      <Img src="images/img_arrow_up_right.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-[44%] sm:w-full mt-[23px] gap-[15px]">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col bg-gradient2 rounded-[14px]">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="product"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h5" className="mt-0.5 !font-semibold">
                      Product Engineering
                    </Heading>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col bg-gradient2 rounded-[14px]">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="approvetick_one"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h6" className="mt-0.5 !font-semibold">
                      Digital Services
                    </Heading>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col bg-gradient2 rounded-[14px]">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="approvetick_one"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h6" className="mt-0.5 !font-semibold">
                      IT Consultancy
                    </Heading>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col bg-gradient2 rounded-[14px]">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="approvetick_one"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h6" className="mt-0.5 !font-semibold">
                      Digital Services
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-[51%] md:w-full">
              <div className="flex self-end justify-between items-start w-[85%] md:w-full gap-5 z-[1]">
                <Img src="images/img_star.png" alt="image" className="w-[51px] object-cover" />
                <Img src="images/img_star_wide.png" alt="image_one" className="w-[60px] mt-[19px] object-cover" />
              </div>
              <div className="flex flex-col items-end w-[91%] md:w-full mt-[-2px] relative">
                <div className="flex md:flex-col self-stretch items-center">
                  <Img
                    src="images/img_star_wide.png"
                    alt="image_two"
                    className="self-end w-[10%] md:w-full mb-[15px] z-[1] object-cover"
                  />
                  <div className="md:self-stretch h-[591px] md:w-full ml-[-41px] md:ml-0 relative flex-1 md:flex-none">
                    <div className="h-[565px] w-[92%] md:h-auto left-[0.00px] bottom-0 top-0 my-auto rounded-bl-[265px] bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat absolute">
                      <Img
                        src="images/img_rectangle_8.png"
                        alt="image_three"
                        className="h-[565px] w-full md:h-auto rounded-bl-[265px] object-cover"
                      />
                    </div>
                    <Img
                      src="images/img_rectangle_7.png"
                      alt="image_four"
                      className="h-[579px] w-[95%] right-[0.00px] bottom-0 top-0 my-auto rounded-bl-[265px] object-cover absolute"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_close.svg"
                  alt="close_one"
                  className="h-[71px] w-[71px] mt-[-33px] mr-[23px] md:mr-0 z-[1] relative"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-[114px] gap-[94px] mx-auto md:gap-[70px] md:p-5 sm:gap-[47px] max-w-[1250px]">
            <div className="flex flex-col items-center gap-[19px]">
              <div className="flex items-center">
                <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                  OUR BEST SERVICES
                </Text>
              </div>
              <Heading size="4xl" as="h2">
                We Provide Best Services
              </Heading>
            </div>
            <div className="self-stretch justify-center gap-[25px] grid-cols-[repeat(auto-fill,_minmax(356px_,_1fr))] grid">
              <div className="h-[500px] w-full bg-gray-300_33 relative rounded-[20px] flip-card">
                <div className="flip-card-inner">
                  <div className="flip_card_front">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flip_card_back">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px] w-full bg-gray-300_33 relative rounded-[20px] flip-card">
                <div className="flip-card-inner">
                  <div className="flip_card_front">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flip_card_back">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px] w-full bg-gray-300_33 relative rounded-[20px] flip-card">
                <div className="flip-card-inner">
                  <div className="flip_card_front">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flip_card_back">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px] w-full bg-gray-300_33 relative rounded-[20px] flip-card">
                <div className="flip-card-inner">
                  <div className="flip_card_front">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flip_card_back">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px] w-full bg-gray-300_33 relative rounded-[20px] flip-card">
                <div className="flip-card-inner">
                  <div className="flip_card_front">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flip_card_back">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px] w-full bg-gray-300_33 relative rounded-[20px] flip-card">
                <div className="flip-card-inner">
                  <div className="flip_card_front">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flip_card_back">
                    <div className="h-[213px] w-[84%] right-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="flex justify-end items-start w-[79%] right-[0.00px] top-[0.00px] m-auto absolute">
                        <Img
                          src="images/img_s4_il_4_1.png"
                          alt="s4il4one_one"
                          className="w-[38%] mt-3.5 z-[1] object-cover"
                        />
                        <Img
                          src="images/img_vector_gray_300_01.svg"
                          alt="vector_one"
                          className="h-[202px] ml-[-52px] relative rounded-[20px]"
                        />
                      </div>
                      <Heading size="s" as="h6" className="bottom-[-0.42px] left-[0.00px] m-auto absolute">
                        Seo Audits & Strategy
                      </Heading>
                    </div>
                    <div className="h-[221px] w-[93%] bottom-[0.00px] left-[0.00px] m-auto absolute">
                      <div className="flex items-center w-[66%] bottom-[0.90px] left-[0.00px] m-auto absolute ">
                        <div className="flex items-center flex-1">
                          <Img
                            src="images/img_vector_gray_300_01_206x195.svg"
                            alt="vector_three"
                            className="h-[206px] rounded-[20px]"
                          />
                        </div>
                        <Button size="4xl" shape="square" className='img_arrow'>
                          <Img src="images/img_arrow.png" alt="arrow_one" />
                        </Button>
                      </div>
                      <p
                        className="w-[92%] right-[0.00px] top-[0.00px] m-auto text-blue_gray-500 text-center absolute"
                      >
                        <>
                          Lorem ipsum dolor sit amet bibendum elit sit <br />
                          finibus. Maximus sodales parturien lore arcu <br />
                          eros vel erat pede netus qu.
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[66px]">
            <Button
              size="3xl"
              className="sm:px-5 font-semibold min-w-[154px] !rounded-[25px]"
            >
              VIEW ALL SERVICES
            </Button>
            <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
              <Img src="images/img_arrow_up_right.svg" />
            </Button>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-[195px] gap-5 mx-auto md:p-5 max-w-[1259px]">
            <div className="flex sm:flex-col justify-between items-start w-[46%] md:w-full gap-5">
              <div className="flex flex-col items-end w-[47%] sm:w-full gap-[105px] md:gap-[78px] sm:gap-[52px]">
                <Img
                  src="images/img_rectangle_15.png"
                  alt="image_five"
                  className="h-[304px] w-full md:h-auto object-cover rounded-[20px]"
                />
                <Img
                  src="images/img_rectangle_16.png"
                  alt="image_six"
                  className="w-[65%] mr-1 md:mr-0 object-cover rounded-[20px]"
                />
              </div>
              <Img
                src="images/img_rectangle_14.png"
                alt="image_seven"
                className="w-[47%] sm:w-full object-cover rounded-[20px]"
              />
            </div>
            <div className="flex flex-col w-[50%] md:w-full gap-14 sm:gap-7">
              <div className="flex flex-col gap-5">
                <div className="flex items-center">
                  <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                  <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                    WITH SEO OPTIMIZATION
                  </Text>
                </div>
                <Heading size="4xl" as="h2">
                  <>
                    Marketing And Creative
                    <br />
                    Solutions Seo
                  </>
                </Heading>
                <Text size="xl" as="p" className="w-[94%] md:w-full !text-blue_gray-500">
                  <>
                    We are 100+ professional software engineers with more <br />
                    than 10 year of experience in delivering superior products.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[27px]">
                <div className="flex flex-col gap-[27px]">
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex justify-between gap-5 flex-wrap">
                      <Text size="xl" as="p" className="self-end !text-gray-900 !font-poppins">
                        Finance Consulting
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="self-start !text-transparent !font-poppins bg-gradient1 bg-clip-text"
                      >
                        80%
                      </Text>
                    </div>
                    <div className="flex p-[5px] border-2 border-solid green_A400_teal_500_border rounded-[9px]">
                      <div className="h-[6px] w-[65%] bg-gradient1 rounded-[3px]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex justify-between gap-5 flex-wrap">
                      <Text size="xl" as="p" className="self-end !text-gray-900 !font-poppins">
                        Finance Consulting
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="self-start !text-transparent !font-poppins bg-gradient4 bg-clip-text"
                      >
                        80%
                      </Text>
                    </div>
                    <div className="flex p-[5px] border-2 border-solid cyan_900_cyan_300_border rounded-[9px]">
                      <div className="h-[6px] w-[65%] bg-gradient4 rounded-[3px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between gap-5 flex-wrap">
                    <Text size="xl" as="p" className="self-end !text-gray-900 !font-poppins">
                      Finance Consulting
                    </Text>
                    <Text
                      size="xl"
                      as="p"
                      className="self-start !text-transparent !font-poppins bg-gradient1 bg-clip-text"
                    >
                      80%
                    </Text>
                  </div>
                  <div className="h-[18px] border-2 border-solid green_A400_teal_500_border relative rounded-[9px]">
                    <div style={{ width: "64%" }} className="h-full bg-gradient1 absolute rounded-[3px]" />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col justify-between w-[93%] md:w-full gap-5">
                <div className="flex">
                  <Button
                    size="3xl"
                    variant="outline"
                    shape="round"
                    color="green_A400_teal_500"
                    className="sm:px-5 text-transparent font-medium bg-gradient1 bg-clip-text min-w-[212px]"
                  >
                    VIEW ALL SERVICES
                  </Button>
                  <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                    <Img src="images/img_arrow_up_right.svg" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center border-[5px] border-solid green_A100_bf_light_green_100_bf_border rounded-[27px]">
                    <Button size="sm" shape="circle" color="green_A400_teal_500" className="w-[36px] !rounded-[18px]">
                      <Img src="images/img_call_24_outline.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col self-start items-start">
                    <Text as="p" className="!text-transparent !font-normal bg-gradient1 bg-clip-text">
                      Call Us Anytime
                    </Text>
                    <Heading size="md" as="h3" className="!text-[26.65px] !font-bold">
                      0215 6856 9875
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col self-stretch justify-center items-center mt-[137px] pl-[25px] gap-[30px] py-[25px] sm:pl-5 sm:py-5 bg-gradient1">
            <Heading size="6xl" as="h2" className="mt-[19px] mb-[18px] !text-white-A700">
              DIGITAL
            </Heading>
            <Img src="images/img_group_22.svg" alt="image_eight" className="h-[71px] md:w-full" />
            <Heading size="6xl" as="h3" className="!text-white-A700">
              JYHTU
            </Heading>
            <Img src="images/img_group_22.svg" alt="image_nine" className="h-[71px] md:w-full" />
            <Heading size="6xl" as="h4" className="!text-white-A700">
              CREATIVE
            </Heading>
          </div>
          <div className="flex md:flex-col w-full mt-[137px] gap-10 mx-auto md:p-5 max-w-[1249px]">
            <div className="h-[582px] w-full md:h-auto relative">
              <div className="w-full">
                <Img src="images/img_subtract.svg" alt="subtract_one" className="h-[319px] w-full md:h-auto z-[1]" />
                <Img
                  src="images/img_subtract.svg"
                  alt="image"
                  className="h-[319px] w-full md:h-auto mt-[-56px] relative"
                />
              </div>
              <div className="flex flex-col items-center w-[81%] h-max left-0 bottom-0 right-0 top-0 p-[51px] m-auto md:p-5 border-white-A700 border-[20px] border-solid bg-gradient1 absolute rounded-[158px]">
                <Img src="images/img_t4_img_1_1.png" alt="rachna_sheth" className="w-[204px] mt-[15px] object-cover" />
                <Heading size="md" as="h2" className="mt-7 !text-white-A700 !text-[26.11px] !font-bold">
                  RACHNA SHETH
                </Heading>
                <Text size="s" as="p" className="mt-[13px] mb-[66px] !text-white-A700 !text-[14.68px]">
                  FULL STACK DEVELOPER
                </Text>
              </div>
            </div>
            <div className="h-[582px] w-full md:h-auto relative">
              <div className="w-full">
                <Img src="images/img_subtract.svg" alt="subtract_one" className="h-[319px] w-full md:h-auto z-[1]" />
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_three"
                  className="h-[319px] w-full md:h-auto mt-[-56px] relative"
                />
              </div>
              <div className="flex flex-col items-center w-[81%] h-max left-0 bottom-0 right-0 top-0 p-[51px] m-auto md:p-5 border-white-A700 border-[20px] border-solid bg-gradient1 absolute rounded-[158px]">
                <Img src="images/img_t4_img_2_1.png" alt="t4img2one_one" className="w-[204px] mt-[15px] object-cover" />
                <Heading size="md" as="h3" className="mt-7 !text-white-A700 !text-[26.11px] !font-bold">
                  RACHNA SHETH
                </Heading>
                <Text size="s" as="p" className="mt-[13px] mb-[66px] !text-white-A700 !text-[14.68px]">
                  FULL STACK DEVELOPER
                </Text>
              </div>
            </div>
            <div className="h-[582px] w-full md:h-auto relative">
              <div className="w-full">
                <Img src="images/img_subtract.svg" alt="subtract_one" className="h-[319px] w-full md:h-auto z-[1]" />
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_three"
                  className="h-[319px] w-full md:h-auto mt-[-56px] relative"
                />
              </div>
              <div className="flex flex-col items-center w-[81%] h-max left-0 bottom-0 right-0 top-0 p-[51px] m-auto md:p-5 border-white-A700 border-[20px] border-solid bg-gradient1 absolute rounded-[158px]">
                <Img src="images/img_t4_img_3_1.png" alt="t4img3one_one" className="w-[204px] mt-[15px] object-cover" />
                <Heading size="md" as="h4" className="mt-7 !text-white-A700 !text-[26.11px] !font-bold">
                  RACHNA SHETH
                </Heading>
                <Text size="s" as="p" className="mt-[13px] mb-[66px] !text-white-A700 !text-[14.68px]">
                  FULL STACK DEVELOPER
                </Text>
              </div>
            </div>
          </div>
          <div className="flex mt-[62px]">
            <Button
              size="3xl"
              variant="outline"
              shape="round"
              color="green_A400_teal_500"
              className="sm:px-5 text-transparent font-medium bg-gradient1 bg-clip-text min-w-[181px]"
            >
              VIEW ALL TEAM
            </Button>
            <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
              <Img src="images/img_arrow_up_right.svg" />
            </Button>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-[241px] gap-5 mx-auto md:p-5 max-w-[1299px]">
            <div className="flex flex-col w-[48%] md:w-full gap-[15px]">
              <div className="flex items-center">
                <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                  OUR BEST PROJECTS
                </Text>
              </div>
              <Heading size="4xl" as="h2">
                <>
                  Take A Look Our Work
                  <br />
                  Gallery Recent Projects
                </>
              </Heading>
            </div>
            <div className="flex flex-col w-[45%] md:w-full gap-6">
              <Text size="xl" as="p" className="!text-blue_gray-500">
                We Are 100+ Professional Software Engineers With More Than 10 Years Of Experience In Delivering Superior
              </Text>
              <div className="flex">
                <Button
                  size="3xl"
                  variant="outline"
                  shape="round"
                  color="green_A400_teal_500"
                  className="sm:px-5 text-transparent font-medium bg-gradient1 bg-clip-text min-w-[209px]"
                >
                  VIEW ALL PROJECT
                </Button>
                <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                  <Img src="images/img_arrow_up_right.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-[100px]">
            <div>
              <div>
                <Img
                  src="images/img_ellipse_14.png"
                  alt="image_ten"
                  className="h-[235px] w-full md:h-auto z-[1] object-cover"
                />
                <div className="flex md:flex-col mt-[-109px] gap-[29px] relative">
                  <Img
                    src="images/img_rectangle_24.png"
                    alt="image_eleven"
                    className="w-[33%] md:w-full object-cover"
                  />
                  <div className="h-[812px] w-[33%] md:w-full md:h-auto md:p-5 relative">
                    <Img
                      src="images/img_rectangle_25.png"
                      alt="image_twelve"
                      className="h-[812px] w-full object-cover"
                    />
                    <div className="flex flex-col items-start w-[79%] h-max gap-[61px] left-0 bottom-0 right-0 top-0 m-auto sm:gap-[30px] absolute">
                      <Img
                        src="images/img_noun_arrow_left_419623.svg"
                        alt="nounarrowleft"
                        className="h-[217px] w-[217px] ml-[60px] md:ml-0"
                      />
                      <div className="flex flex-col items-start gap-7">
                        <Button
                          size="xl"
                          shape="round"
                          color="green_A400_teal_500"
                          className="sm:px-5 font-semibold min-w-[154px] !rounded-[25px]"
                        >
                          marketing
                        </Button>
                        <Heading size="xl" as="h2" className="!text-white-A700">
                          Social Media Marketing
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle_26.png"
                    alt="image_thirteen"
                    className="w-[33%] md:w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-[-109px] p-[23px] sm:p-5 z-[1] relative bg-white-A700 rounded-[720px]">
                <div className="flex mb-[135px]">
                  <div className="flex gap-[30px]">
                    <Button
                      variant="outline"
                      shape="circle"
                      color="green_A400_teal_500"
                      className="w-[54px] rotate-[180deg] !border-[3px] !rounded-[27px]"
                    >
                      <Img src="images/img_arrow_up_right_54x54.png" />
                    </Button>
                    <Button
                      variant="outline"
                      shape="circle"
                      color="green_A400_teal_500"
                      className="w-[54px] !border-[3px] !rounded-[27px]"
                    >
                      <Img src="images/img_arrow_up_right_1.png" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full mt-[-65px] gap-[82px] mx-auto md:gap-[61px] md:p-5 sm:gap-[41px] z-[1] relative max-w-[1211px]">
              <div className="flex flex-col items-center w-[59%] md:w-full gap-[21px]">
                <div className="flex items-center">
                  <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                  <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                    OUR WORK PROCESS
                  </Text>
                </div>
                <Heading size="4xl" as="h3" className="text-center">
                  <>
                    A Simple, Yet Powerful And
                    <br />
                    Efficient Process
                  </>
                </Heading>
              </div>
              <div className="w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState1}
                  onSlideChanged={(e) => {
                    setSliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  className="self-stretch"
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-[33px] mx-auto">
                        <div className="flex md:flex-col justify-between w-[91%] md:w-full gap-5">
                          <div className="w-[24%] md:w-full p-4 border-[16px] border-solid light_green_A700_yellow_500_border rounded-[130px]">
                            <div className="p-[37px] sm:p-5 bg-gray-100_01 shadow-sm rounded-[97px]">
                              <Img
                                src="images/img_s4_il_5_1.png"
                                alt="s4il5two_one"
                                className="w-[120px] object-cover"
                              />
                            </div>
                          </div>
                          <div className="w-[24%] md:w-full p-4 border-[16px] border-solid deep_orange_900_green_A200_border rounded-[130px]">
                            <div className="p-[37px] sm:p-5 bg-gray-100_01 shadow-sm rounded-[97px]">
                              <Img
                                src="images/img_s4_il_5_1.png"
                                alt="s4il5three_one"
                                className="w-[120px] object-cover"
                              />
                            </div>
                          </div>
                          <div className="w-[24%] md:w-full p-4 border-[16px] border-solid light_blue_A700_green_400_border rounded-[130px]">
                            <div className="p-[37px] sm:p-5 bg-gray-100_01 shadow-sm rounded-[97px]">
                              <Img
                                src="images/img_s4_il_5_1.png"
                                alt="s4il5four_one"
                                className="w-[120px] object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col gap-[46px] flex-1">
                          <div className="flex flex-col items-center w-full gap-[15px]">
                            <Heading size="lg" as="h4">
                              MARKETING PLAN
                            </Heading>
                            <Text size="xl" as="p" className="!text-blue_gray-500 text-center">
                              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu
                              ent.{" "}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center w-full gap-[15px]">
                            <Heading size="lg" as="h5">
                              EXECUTION
                            </Heading>
                            <Text size="xl" as="p" className="!text-blue_gray-500 text-center">
                              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu
                              ent.{" "}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center w-full gap-[15px]">
                            <Heading size="lg" as="h6">
                              GROWTH & SCALE
                            </Heading>
                            <Text size="xl" as="p" className="!text-blue_gray-500 text-center">
                              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu
                              ent.{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[39%] md:w-full mt-[92px] gap-[21px] md:p-5">
            <div className="flex items-center">
              <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
              <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                OUR TESTIMONIAL
              </Text>
            </div>
            <Heading size="4xl" as="h2" className="text-center">
              <>
                What Our Clients Say
                <br />
                About Us
              </>
            </Heading>
          </div>
          <div className="flex md:flex-col self-end w-full mt-[51px] gap-10 mx-auto md:p-5 max-w-[2248px]">
            <div className="w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                paddingLeft={532}
                paddingRight={249}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="md:self-stretch flex-1"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col py-5 mx-2.5 bg-white-A700 rounded-[20px]">
                      <div className="flex sm:flex-col items-start gap-3.5">
                        <Img
                          src="images/img_gto_t5_img_1_1.png"
                          alt="gtot5img1one"
                          className="w-[38%] sm:w-full object-cover"
                        />
                        <div className="flex flex-col sm:self-stretch mt-[19px] pb-[26px] gap-5 sm:pb-5 flex-1">
                          <RatingBar value={1} isEditable={true} size={22} className="flex justify-between" />
                          <Text size="lg" as="p">
                            <>
                              “With Over A Decade Of Experie, <br />
                              We’ve Established Ourselves As <br />
                              One Of The Pioneering Agencies In <br />
                              The Region. Our Small, Flexible, <br />
                              Agile And Design-Led Structures & <br />
                              Processes”
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="h-px bg-blue_gray-500" />
                      <div className="flex justify-between items-center mt-4 gap-5 flex-wrap">
                        <Text size="lg" as="p">
                          ESTHER HOWARD
                        </Text>
                        <Text size="s" as="p" className="self-start !text-transparent bg-gradient1 bg-clip-text">
                          FINANCE SPECIALIST
                        </Text>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
          <div className="flex md:flex-col self-start justify-between items-center w-full mt-[54px] gap-5 mx-auto md:p-5 max-w-[1180px]">
            <div className="h-[6px] w-[83%] bg-teal-A700_33 relative rounded-[3px]">
              <div style={{ width: "43%" }} className="h-full bg-gradient1 absolute" />
            </div>
            <div className="flex gap-[30px]">
              <Button
                variant="outline"
                shape="circle"
                color="green_A400_teal_500"
                className="w-[54px] rotate-[180deg] !border-[3px] !rounded-[27px]"
              >
                <Img src="images/img_arrow_up_right_54x54.png" />
              </Button>
              <Button
                variant="outline"
                shape="circle"
                color="green_A400_teal_500"
                className="w-[54px] !border-[3px] !rounded-[27px]"
              >
                <Img src="images/img_arrow_up_right_1.png" />
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-start w-full mt-[93px] gap-5 mx-auto md:p-5 max-w-[1312px]">
            <div className="flex flex-col w-[37%] md:w-full gap-[39px]">
              <div className="flex flex-col gap-[39px]">
                <div className="flex flex-col w-[93%] md:w-full gap-3">
                  <div className="flex items-center">
                    <Img src="images/img_arrow_down_left.png" alt="arrowdownleft" className="w-[33px] object-cover" />
                    <Text as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                      OUR BLOGS & NEWS
                    </Text>
                  </div>
                  <Heading size="4xl" as="h2">
                    <>
                      Get More Update
                      <br />
                      For News
                    </>
                  </Heading>
                </div>
                <Text size="xl" as="p" className="!text-blue_gray-500">
                  We are 100+ professional software engineers with more than 10 years of experience in delivering super
                  products it because you&#39;ve seen it.
                </Text>
              </div>
              <div className="flex">
                <Button
                  size="3xl"
                  variant="outline"
                  shape="round"
                  color="green_A400_teal_500"
                  className="sm:px-5 text-transparent font-medium bg-gradient1 bg-clip-text min-w-[178px]"
                >
                  VIEW ALL BLOG
                </Button>
                <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                  <Img src="images/img_arrow_up_right.svg" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-[58%] md:w-full gap-[38px]">
              <div className="flex md:flex-col gap-[26px] flex-1">
                <Img
                  src="images/img_rectangle_30.png"
                  alt="image"
                  className="w-[37%] md:w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col justify-center md:self-stretch gap-[21px] p-5 border-gray-300 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                  <div className="flex items-center mt-[13px] gap-[25px]">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="text-transparent font-medium bg-clip-text min-w-[81px] rounded-[14px]"
                    >
                      Design
                    </Button>
                    <Text size="s" as="p" className="self-end mb-1">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h3">
                    <>
                      Agency Needs To Embrace Social
                      <br />
                      Media..
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col gap-[26px] flex-1">
                <Img
                  src="images/img_rectangle_30_235x275.png"
                  alt="image"
                  className="w-[37%] md:w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col justify-center md:self-stretch gap-[21px] p-5 border-gray-300 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                  <div className="flex items-center mt-[13px] gap-6">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="text-transparent font-medium bg-clip-text min-w-[95px] rounded-[14px]"
                    >
                      Business
                    </Button>
                    <Text size="s" as="p" className="self-end mb-1">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h4" className="w-[83%] md:w-full">
                    <>
                      Lead Designer’s UI/UX Core <br />
                      Checklist.
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col gap-[26px] flex-1">
                <Img
                  src="images/img_rectangle_30_1.png"
                  alt="image"
                  className="w-[37%] md:w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col justify-center md:self-stretch gap-[21px] p-5 border-gray-300 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                  <div className="flex items-center mt-[13px] gap-7">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="text-transparent font-medium bg-clip-text min-w-[116px] rounded-[14px]"
                    >
                      Development
                    </Button>
                    <Text size="s" as="p" className="self-end mb-1">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h5" className="w-[83%] md:w-full">
                    <>
                      Lead Designer’s UI/UX Core <br />
                      Checklist.
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col gap-[26px] flex-1">
                <Img
                  src="images/img_rectangle_30_2.png"
                  alt="image"
                  className="w-[37%] md:w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col justify-center md:self-stretch gap-[21px] p-5 border-gray-300 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                  <div className="flex items-center mt-[13px] gap-[30px]">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="text-transparent font-medium bg-clip-text min-w-[106px] rounded-[14px]"
                    >
                      Marketing
                    </Button>
                    <Text size="s" as="p" className="self-end mb-1">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h6" className="w-[93%] md:w-full">
                    <>
                      We Are Building Everything You
                      <br />
                      Needed
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-[58px]">
            <div className="h-[553px] w-full mx-auto md:p-5 z-[1] relative max-w-[1191px]">
              <div className="flex flex-col items-end justify-end w-full bottom-[0.00px] right-0 left-0 p-[53px] m-auto md:p-5 bg-gradient1 absolute rounded-[40px]">
                <Heading size="2xl" as="h2" className="flex mt-14 !text-white-A700">
                  <span className="text-white-A700">Subscribe To Our&nbsp;</span>
                  <a href="#" className="text-white-A700 underline">
                    Newsletter!
                  </a>
                </Heading>
                <Text size="lg" as="p" className="w-[53%] md:w-full mt-6 !text-white-A700">
                  We are 100+ professional software engineers with more than 10 years in delive ring super products it
                  because you&#39;ve seen it.
                </Text>
                <div className="h-[54px] w-[53%] md:h-auto mt-16 mb-12 relative">
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Your Email`}
                    className="w-full sm:px-5"
                  />
                  <Button
                    size="lg"
                    color="green_A400_teal_500"
                    className="right-[4.00px] bottom-0 top-0 my-auto sm:px-5 font-semibold min-w-[142px] absolute rounded-lg"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_n4_img_1_1.png"
                alt="n4img1one_one"
                className="h-[553px] w-[41%] left-[25.00px] bottom-0 top-0 my-auto object-cover absolute"
              />
            </div>
            <footer className="mt-[-375px] py-2.5 relative bg-teal-900">
              <div className="flex flex-col items-center justify-center mt-[435px]">
                <div className="flex md:flex-col items-start w-full mx-auto md:p-5 max-w-[1042px]">
                  <div className="flex flex-col w-[52%] md:w-full gap-9">
                    <Img src="images/img_png_3.png" alt="pngtwo_one" className="w-[33%] object-cover" />
                    <Text size="lg" as="p" className="!text-white-A700">
                      Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available
                    </Text>
                    <Img
                      src="images/img_gto_footer_2_payment.png"
                      alt="gtofootertwo"
                      className="w-[53%] object-cover"
                    />
                  </div>
                  <div className="flex flex-col md:self-stretch ml-[18px] gap-[31px] md:ml-0 flex-1">
                    <Heading size="md" as="h4" className="!text-white-A700">
                      Resources
                    </Heading>
                    <div className="flex flex-col items-start gap-5">
                      <a href="Carrer" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Carrer
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          About Us
                        </Heading>
                      </a>
                      <a href="Features" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Features
                        </Heading>
                      </a>
                      <a href="Services" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Services
                        </Heading>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:self-stretch ml-[86px] gap-7 md:ml-0 flex-1">
                    <Heading size="md" as="h4" className="!text-white-A700">
                      Company{" "}
                    </Heading>
                    <div className="flex flex-col items-start gap-5">
                      <a href="Blog" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Blog
                        </Heading>
                      </a>
                      <a href="Developers" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Developers
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          Our Story
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          About Us
                        </Heading>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:self-stretch ml-[86px] gap-7 md:ml-0 flex-1">
                    <Heading size="md" as="h4" className="!text-white-A700">
                      Help Pages
                    </Heading>
                    <div className="flex flex-col items-start gap-[21px]">
                      <a href="Customer" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Customer
                        </Heading>
                      </a>
                      <a href="Developers" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Developers
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          Our Story
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          About Us
                        </Heading>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px w-full mt-[42px] bg-white-A700_7f" />
                <div className="flex self-end justify-between items-start w-[61%] md:w-full mt-[19px] mr-[25px] gap-5 md:p-5 md:mr-0">
                  <Text size="lg" as="p" className="mt-[13px] !text-white-A700">
                    Copyright © 2024, All Rights Reserved.
                  </Text>
                  <div className="flex flex-col items-center rounded-tl-[17px] rounded-tr-[17px] bg-gradient3">
                    <Img
                      src="images/img_arrow_up_right_white_a700.svg"
                      alt="arrowupright"
                      className="h-[33px] w-[33px] mt-1 mb-[13px]"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

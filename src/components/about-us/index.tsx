import { Container, Grid, Slide, Typography } from "@mui/material";
import AboutUsCard from "./card";

import { useEffect, useState } from "react";
import doctor from "../../assets/doctor.jpeg";
import nutricionist from "../../assets/nutricionist.jpeg";
import personalTrainer from "../../assets/personal-trainer.png";

const ID_PREFIX = "ABOUT-US-SECTION-";

enum Id {
  title = "title",
}

const AboutUs = () => {
  const [trigger, setTrigger] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
  const [trigger4, setTrigger4] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleScroll = () => {
      setisMobile(window.innerWidth < 900);
      trigger === false && window.scrollY > 260 && setTrigger(true);
      trigger2 === false && window.scrollY > 430 && setTrigger2(true);
      trigger3 === false &&
        window.scrollY > (isMobile ? 1235 : 430) &&
        setTrigger3(true);
      trigger4 === false &&
        window.scrollY > (isMobile ? 1855 : 430) &&
        setTrigger4(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid py={5} container sx={{ backgroundColor: "#ffffff" }}>
      <Grid item xs={12} pb={4}>
        <Slide in={trigger} timeout={1000}>
          <Typography
            id={ID_PREFIX + Id.title}
            color="primary"
            variant="button"
            textAlign={"center"}
            alignItems={"center"}
            display="flex"
            justifyContent={"center"}
            fontWeight={300}
            fontSize={30}
            sx={{
              typography: {
                xs: { fontSize: 24 },
                md: { fontSize: 30 },
              },
            }}
          >
            Professional Team Members
          </Typography>
        </Slide>
        <Slide in={trigger} timeout={1200}>
          <Grid container p={1}>
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Typography
                color="primary"
                variant="caption"
                textAlign={"center"}
                alignItems={"center"}
                display="flex"
                justifyContent={"center"}
              >
                Get support from our professional through every step of your
                journey
              </Typography>
            </Grid>
            <Grid item xs={1} md={3}></Grid>
          </Grid>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Slide
              direction={isMobile ? "right" : "up"}
              in={trigger2}
              timeout={1000}
            >
              <Grid item xs={12} md={4}>
                <AboutUsCard
                  category="Certified Personal Trainer & Fitness Enthusiast"
                  img={personalTrainer}
                  name="Kevin G."
                  description={
                    <>
                      Kevin G. is a certified personal trainer with a passion
                      for helping individuals achieve their fitness goals and
                      lead healthier lifestyles. With over 12 years of
                      experience in the fitness industry, Kevin holds a
                      Bachelor's degree in Exercise Science from the University
                      of Miami and multiple certifications from the National
                      Academy of Sports Medicine (NASM).
                      <p></p>
                      Kevin's journey in fitness began as an athlete, where he
                      developed a deep appreciation for the importance of
                      physical health and conditioning. This background has
                      fueled his dedication to creating customized workout
                      programs that cater to the unique needs and goals of his
                      clients, whether they are beginners or seasoned athletes.
                      <p></p>
                      Throughout his career, Kevin has worked in various
                      settings, including high-end gyms, corporate wellness
                      programs, and private training studios. He specializes in
                      strength training, cardiovascular fitness, functional
                      training, and nutritional guidance, ensuring a holistic
                      approach to health and fitness.
                      <p></p>
                      Beyond personal training, Kevin is an advocate for fitness
                      education. He regularly conducts fitness workshops, writes
                      for health and fitness blogs, and participates in
                      community fitness events. His motivational style and
                      results-driven approach have earned him a loyal client
                      base.
                      <p></p>
                      In his downtime, Kevin enjoys competing in triathlons,
                      hiking, and experimenting with new fitness trends. His
                      commitment to personal fitness and continuous learning is
                      evident in every aspect of his life.
                      <p></p>
                      Kevin G. believes that fitness is a lifelong journey and
                      is dedicated to empowering his clients to become the best
                      versions of themselves through consistent effort and
                      positive lifestyle changes.
                    </>
                  }
                />
              </Grid>
            </Slide>
            <Slide
              direction={isMobile ? "left" : "up"}
              in={trigger3}
              timeout={isMobile ? 1000 : 2000}
            >
              <Grid item xs={12} md={4}>
                <AboutUsCard
                  name="Cristine K."
                  img={nutricionist}
                  category="Registered Nutritionist & Wellness Advocate"
                  description={
                    <>
                      Cristine K. is a dedicated registered nutritionist with
                      over 10 years of experience in the field of nutritional
                      science and wellness.
                      <p></p>
                      Holding a Master's degree in Nutritional Science from the
                      University of California, Los Angeles (UCLA), Cristine has
                      a deep understanding of the intricate relationship between
                      diet, health, and overall well-being. Her career began at
                      a leading healthcare facility where she worked closely
                      with patients to develop personalized nutrition plans
                      tailored to their unique health needs.
                      <p></p>
                      Passionate about community health, Cristine has also led
                      numerous workshops and seminars aimed at educating the
                      public on the importance of balanced diets and healthy
                      eating habits.
                      <p></p>
                      Cristine's approach to nutrition is holistic, focusing not
                      only on diet but also on lifestyle and mental health. She
                      is a strong advocate for sustainable eating practices and
                      regularly contributes to wellness blogs and health
                      magazines. When she isn't working, Cristine enjoys
                      experimenting with new recipes, practicing yoga, and
                      exploring nature trails. As a trusted professional in her
                      field, Cristine K. is committed to empowering individuals
                      to achieve their health goals through informed dietary
                      choices and a balanced lifestyle.
                    </>
                  }
                />
              </Grid>
            </Slide>
            <Slide
              direction={isMobile ? "right" : "up"}
              in={trigger4}
              timeout={isMobile ? 1000 : 3000}
            >
              <Grid item xs={12} md={4}>
                <AboutUsCard
                  name="Henry C."
                  img={doctor}
                  category="Certified Mental Health Mentor & Life Coach"
                  description={
                    <>
                      Henry C. is a certified mental health mentor and life
                      coach with over 15 years of experience helping individuals
                      navigate their mental health journeys. He holds a Master's
                      degree in Clinical Psychology from New York University
                      (NYU) and has specialized training in cognitive-behavioral
                      therapy (CBT) and mindfulness-based stress reduction
                      (MBSR).
                      <p></p>
                      Throughout his career, Henry has worked with a diverse
                      range of clients, from teenagers facing academic pressures
                      to adults managing work-life balance and relationship
                      issues. His empathetic approach and practical strategies
                      have made him a sought-after mentor in both private
                      practice and community settings.
                      <p></p>
                      Henry's passion for mental health extends beyond
                      one-on-one sessions. He has hosted numerous workshops and
                      webinars on topics such as stress management, resilience
                      building, and emotional intelligence. As an advocate for
                      mental wellness, Henry frequently collaborates with
                      schools, workplaces, and non-profit organizations to
                      promote mental health awareness and education.
                      <p></p>
                      In his free time, Henry enjoys practicing meditation,
                      hiking, and writing articles on mental health topics for
                      various online platforms. His commitment to personal
                      growth and holistic well-being is evident in every aspect
                      of his work.
                      <p></p>
                      Henry C. believes in the power of self-awareness and
                      positive thinking, and he is dedicated to guiding his
                      clients toward a more balanced and fulfilling life.
                    </>
                  }
                />
              </Grid>
            </Slide>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

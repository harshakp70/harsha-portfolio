import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#333333",
  },

  /* ---------------- HEADER ---------------- */

  header: {
    backgroundColor: "#FF6000",
    paddingHorizontal: 35,
    paddingVertical: 28,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 22,
    objectFit: "cover",
  },

  profileContent: {
    flex: 1,
  },

  name: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  role: {
    color: "#FFE7D6",
    marginTop: 4,
    fontSize: 13,
    fontWeight: "bold",
  },

  summary: {
    color: "#ffffff",
    marginTop: 12,
    lineHeight: 1.6,
    fontSize: 10,
  },

  /* ---------------- BODY ---------------- */

  body: {
    flexDirection: "row",
  },

  left: {
    width: "30%",
    backgroundColor: "#FAFAFA",
    padding: 24,
  },

  right: {
    width: "70%",
    padding: 26,
  },

  sectionTitle: {
    color: "#FF6000",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 18,
  },

  text: {
    color: "#555",
    fontSize: 10,
    lineHeight: 1.7,
  },

  contactLabel: {
    fontSize: 9,
    color: "#999999",
    marginTop: 8,
  },

  contactValue: {
    fontSize: 10,
    color: "#333333",
    marginTop: 2,
  },

  skillBox: {
    backgroundColor: "#FFF3EB",
    color: "#FF6000",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 6,
    fontSize: 9,
  },

  experienceCard: {
    borderLeftWidth: 3,
    borderLeftColor: "#FF6000",
    paddingLeft: 16,
    marginBottom: 24,
  },

  jobTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  company: {
    color: "#666",
    marginTop: 2,
    marginBottom: 4,
  },

  duration: {
    color: "#FF6000",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 9,
  },

  bullet: {
    marginBottom: 5,
    lineHeight: 1.6,
    fontSize: 10,
  },

  projectCard: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },

  educationCard: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
  },
});

export default function ResumePDF() {
  return (
    <Document>

      <Page size="A4" style={styles.page}>

        {/* HEADER */}

        <View style={styles.header}>

          <View style={styles.headerRow}>

            <Image
              src="/Images/harsha.jpg"
              style={styles.profileImage}
            />

            <View style={styles.profileContent}>

              <Text style={styles.name}>
                Harsha K P
              </Text>

              <Text style={styles.role}>
                MERN Stack | React Native Developer
              </Text>

              <Text style={styles.summary}>
                Passionate Full Stack Developer with hands-on
                experience in building scalable MERN Stack web
                applications and React Native mobile applications.
                Experienced in frontend, backend and mobile
                development with strong problem-solving skills and a
                continuous learning mindset.
              </Text>

            </View>

          </View>

        </View>

        {/* BODY */}

        <View style={styles.body}>

          {/* LEFT COLUMN START */}

          <View style={styles.left}>
                      {/* CONTACT */}

          <Text style={styles.sectionTitle}>
            CONTACT
          </Text>

          <Text style={styles.contactLabel}>
            Email
          </Text>

          <Text style={styles.contactValue}>
            harsharenjith70@gmail.com
          </Text>

          <Text style={styles.contactLabel}>
            Phone
          </Text>

          <Text style={styles.contactValue}>
            +91 9946929074
          </Text>

          <Text style={styles.contactLabel}>
            Location
          </Text>

          <Text style={styles.contactValue}>
            Kerala, India
          </Text>

          <Text style={styles.contactLabel}>
            GitHub
          </Text>

          <Text style={styles.contactValue}>
            github.com/harshakp70
          </Text>

          <Text style={styles.contactLabel}>
            LinkedIn
          </Text>

          <Text style={styles.contactValue}>
            linkedin.com/in/harshakp70
          </Text>

          {/* TECHNICAL SKILLS */}

          <Text style={styles.sectionTitle}>
            TECHNICAL SKILLS
          </Text>

          <Text style={styles.contactLabel}>
            Frontend
          </Text>

          <Text style={styles.text}>
            React.js{"\n"}
            JavaScript{"\n"}
            HTML5{"\n"}
            CSS3{"\n"}
            Tailwind CSS{"\n"}
            Redux Toolkit{"\n"}
            React Router{"\n"}
            Vite
          </Text>

          <Text style={styles.contactLabel}>
            Backend
          </Text>

          <Text style={styles.text}>
            Node.js{"\n"}
            Express.js{"\n"}
            MongoDB{"\n"}
            Mongoose{"\n"}
            REST APIs{"\n"}
            JWT{"\n"}
            Cloudinary
          </Text>

          <Text style={styles.contactLabel}>
            Mobile
          </Text>

          <Text style={styles.text}>
            React Native{"\n"}
            Expo{"\n"}
            React Native CLI{"\n"}
            React Navigation{"\n"}
            Async Storage
          </Text>

          <Text style={styles.contactLabel}>
            Tools
          </Text>

          <Text style={styles.text}>
            Git{"\n"}
            GitHub{"\n"}
            VS Code{"\n"}
            Postman{"\n"}
            Render{"\n"}
            Vercel
          </Text>

          {/* LANGUAGES */}

          <Text style={styles.sectionTitle}>
            LANGUAGES
          </Text>

          <Text style={styles.text}>
            • English{"\n"}
            • Malayalam{"\n"}
            • Tamil{"\n"}
            • Hindi
          </Text>

          {/* END LEFT COLUMN */}

          </View>

          {/* RIGHT COLUMN */}

          <View style={styles.right}>          {/* PROFESSIONAL EXPERIENCE */}

          <Text style={styles.sectionTitle}>
            PROFESSIONAL EXPERIENCE
          </Text>

          <View style={styles.experienceCard}>

            <Text style={styles.jobTitle}>
              Junior Full Stack Developer
            </Text>

            <Text style={styles.company}>
              ElectoAI Analytics Magnifier Pvt. Ltd.
            </Text>

            <Text style={styles.duration}>
              January 2025 – July 2026
            </Text>

            <Text style={styles.bullet}>
              • Developed scalable MERN Stack web applications using React.js,
              Node.js, Express.js and MongoDB.
            </Text>

            <Text style={styles.bullet}>
              • Built secure REST APIs and integrated frontend with backend
              services.
            </Text>

            <Text style={styles.bullet}>
              • Developed cross-platform mobile applications using React Native,
              Expo and React Native CLI.
            </Text>

            <Text style={styles.bullet}>
              • Implemented JWT authentication, MongoDB operations and API
              integrations.
            </Text>

            <Text style={styles.bullet}>
              • Developed reusable UI components using Tailwind CSS and React.
            </Text>

            <Text style={styles.bullet}>
              • Collaborated with the development team using Git and GitHub while
              fixing production issues and implementing new features.
            </Text>

          </View>

          {/* PROJECTS */}

          <Text style={styles.sectionTitle}>
            FEATURED PROJECTS
          </Text>

          <View style={styles.projectCard}>

            <Text style={styles.projectTitle}>
              AI Resume Builder
            </Text>

            <Text style={styles.text}>
              AI-powered React Native application that helps users create
              ATS-friendly resumes with authentication, AI-generated content
              and PDF export functionality.
            </Text>

            <Text
              style={{
                marginTop: 6,
                color: "#FF6000",
                fontSize: 9,
              }}
            >
              React Native • Node.js • MongoDB • AI
            </Text>

          </View>

          <View style={styles.projectCard}>

            <Text style={styles.projectTitle}>
              Magnifier Web
            </Text>

            <Text style={styles.text}>
              Full Stack MERN social media platform with authentication,
              admin dashboard, analytics, role-based access control and
              responsive UI.
            </Text>

            <Text
              style={{
                marginTop: 6,
                color: "#FF6000",
                fontSize: 9,
              }}
            >
              React • Express • MongoDB • JWT
            </Text>

          </View>

          <View style={styles.projectCard}>

            <Text style={styles.projectTitle}>
              Magnifier Mobile
            </Text>

            <Text style={styles.text}>
              Cross-platform mobile application developed using React Native,
              Expo and React Native CLI with REST API integration,
              authentication and notifications.
            </Text>

            <Text
              style={{
                marginTop: 6,
                color: "#FF6000",
                fontSize: 9,
              }}
            >
              React Native • Expo • REST API
            </Text>

          </View>

          <View style={styles.projectCard}>

            <Text style={styles.projectTitle}>
              Developer Portfolio
            </Text>

            <Text style={styles.text}>
              Personal developer portfolio built with React, Tailwind CSS,
              Motion and Vite showcasing projects, experience and skills.
            </Text>

            <Text
              style={{
                marginTop: 6,
                color: "#FF6000",
                fontSize: 9,
              }}
            >
              React • Tailwind CSS • Motion
            </Text>

          </View>          {/* EDUCATION */}

          <Text style={styles.sectionTitle}>
            EDUCATION
          </Text>

          <View style={styles.educationCard}>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 4,
              }}
            >
              B.Sc Computer Science & Technology
            </Text>

            <Text style={styles.text}>
              TSN College of Arts & Science
            </Text>

            <Text style={styles.text}>
              University of Madras, Chennai
            </Text>

            <Text
              style={{
                marginTop: 8,
                color: "#FF6000",
                fontWeight: "bold",
                fontSize: 10,
              }}
            >
              Passed: 2016 | 82%
            </Text>

          </View>

          {/* PROFILE HIGHLIGHTS */}

          <Text style={styles.sectionTitle}>
            PROFILE HIGHLIGHTS
          </Text>

          <Text style={styles.bullet}>
            • 1.5+ years of professional experience in MERN Stack and React Native development.
          </Text>

          <Text style={styles.bullet}>
            • Experience in frontend, backend and mobile application development.
          </Text>

          <Text style={styles.bullet}>
            • Strong understanding of REST APIs, Authentication and MongoDB.
          </Text>

          <Text style={styles.bullet}>
            • Passionate about writing clean, reusable and scalable code.
          </Text>

          <Text style={styles.bullet}>
            • Quick learner with excellent debugging and problem-solving skills.
          </Text>

          {/* CAREER OBJECTIVE */}

          <Text style={styles.sectionTitle}>
            CAREER OBJECTIVE
          </Text>

          <Text style={styles.text}>
            Seeking a Full Stack Developer opportunity where I can
            contribute my MERN Stack and React Native development
            skills while continuously learning modern technologies
            and building scalable products that create real-world impact.
          </Text>

        </View>

      </View>

    </Page>

  </Document>
);
}
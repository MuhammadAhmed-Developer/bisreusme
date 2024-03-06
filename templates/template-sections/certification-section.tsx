import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import CertificateInstituteNameField from "../common-fields/certificate-institute-name.field";
import CertificationStartDateField from "../common-fields/certification-startdate.field";
import CertificationEndDateField from "../common-fields/certification-enddate.field";
import CertificateNameField from "../common-fields/certificate-name.field";

export default function CertificationSection() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

  const handleCertificationOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "certifications",
        updatedData: e,
      })
    );
  };

  const handleAddCertification = (e: any) => {
    dispatch(
      addField({
        path: `certifications`,
        index: e + 1,
      })
    );
  };

  const handleRemoveCertification = (e: any) => {
    dispatch(
      removeField({
        path: `certifications.${e}`,
      })
    );
  };

  const FONTFAMILY = updateData.themeConfiguration?.fontFamily;
  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const TITLEHEADING = updateData.themeConfiguration?.fontSize?.titleHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div style={{ marginTop: SECTIONSPACING }}>
      <h3
        className=""
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          fontSize: SUBHEADING,
          fontFamily: FONTFAMILY,
          color: PRIMARYCOLOR,
          marginTop: "0.25rem",
          fontWeight: 700,
        }}
      >
        CERTIFICATIONS
      </h3>
      <div className="h-[1px] bg-slate-500  mt-3"></div>

      <Dnd
        data={resumeDetails.resumeData?.certifications}
        direction={"horizontal"}
        reorder={handleCertificationOrderChange}
        additem={(e) => handleAddCertification(e)}
        removeitem={(e) => handleRemoveCertification(e)}
        renderItem={(item, indexOfEdu) => (
          <div
            style={{
              padding: `0 ${PAGEMARGIN}px`,
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "100%" }}>
                <CertificateInstituteNameField
                  style={{
                    fontSize: TITLEHEADING,
                    fontWeight: 600,
                    color: ["14px"],
                    marginLeft: "-8px",
                    width: "100%",
                  }}
                  value={item.organization}
                  indexOfEdu={indexOfEdu}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  gap:"6px"
                }}
              >
                <CertificationStartDateField
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "end",
                  }}
                  indexOfEdu={indexOfEdu}
                  value={item.startDate}
                  type="YYYY"
                  maxlength={4}
                />
                <span>-</span>
                <CertificationEndDateField
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "start",
                  }}
                  indexOfEdu={indexOfEdu}
                  value={item.endDate}
                  type="YYYY"
                  maxlength={4}
                />
              </div>
            </div>
            <div>
              <div>
                <ul
                  style={{
                    letterSpacing: "0.05em",
                    listStyleType: "disc",
                    marginLeft: "40px",
                    marginTop: "5px",
                  }}
                >
                  <li>
                    <CertificateNameField
                      style={{
                        fontSize: BODYTEXT,
                        color: ["#000000", "12px"],
                        width: "100%",
                      }}
                      value={item.name}
                      indexOfEdu={indexOfEdu}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}

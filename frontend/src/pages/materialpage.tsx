import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import Latex from "react-latex";
import axios from "axios";
import { BASE_URL } from "../api";
import { Material } from "./Search";

const Wrapper = styled.div`
  padding-top: 100px;
  height: 2500px;
  background: #eee;
`;
const H3 = styled.h1`
  font-size: 50px;
  font-weigth: bold;
  font-family: "Merriweather", serif;
`;
const Navigator = styled.div`
  position: fixed;
  left: 10px;
  top: 100px;
  width: 350px;
  height: 600px;
  background: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  background: white;
  display: block;
`;
const HtmlImg = styled.img`
  width: 90%;
  height: 90%;
  background: white;
  display: block;
`;
const Ul = styled.ul`
  width: 80%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: start;
  margin-left: 30px;
  li {
    margin: 10px 0px;
  }
`;
const A = styled(Link)`
  font-size: 30px;
  color: #999;
  &:hover {
    color: #ffa933;
  }
`;
const A1 = styled(Link)`
  font-size: 20px;
  color: #999;
  &:hover {
    color: #ffa933;
  }
`;

const Section = styled.div`
  height: 100px;
  margin-top: -100px;
  visibility: hidden;
`;

const HtmlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
const Div = styled.div`
  padding-inline: 20px;
  background: #ddd;
  border-radius: 10px;
  width: 350px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;
const Li1 = styled.li`
  background: white;
  border-bottom: 1px solid #333;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: 50%;
    text-align: center;
  }
`;
const H1 = styled.h1`
  font-size: 20px;
  color: black;
`;
const H2 = styled.h1`
  font-size: 20px;
  color: blue;
`;
const PropertiesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-block: 50px;
  width: 900px;
  height: 250px;
  background: white;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
`;
const PiezoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-block: 50px;
  width: 900px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
`;
const MatrixWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const PropertyH1 = styled.h1`
  display: block;
  font-size: 32px;
  font-family: "Merriweather", serif;
`;
const PropertyH2 = styled.h1`
  display: block;
  font-size: 20px;
  font-family: "Merriweather", serif;
`;
const Th = styled.th`
  font-size: 10px;
`;

function MaterialPage() {
  const [isLoading, setIsLoading] = useState(true);

  const { materialId } = useParams();
  const [result, setResult] = useState<Material>();
  const fetchResult = async (target: string) => {
    console.log("target", target);
    const { data } = await axios.get(
      `${BASE_URL}/api/material/id?search=${target}`
    );
    setResult(data);
  };

  useEffect(() => {
    try {
      fetchResult(materialId!);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [materialId]);
  // when go back window.location.reload();
  useEffect(() => {
    const handlePopState = () => {
      // Perform actions when navigating back
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  console.log("result", result);
  const band = "$E_g^{GGA} [eV]$";
  const formation = "${\\Delta}H_f^{GGA} [eV/f.u.]$";
  const syn = "${\\Delta}H_{syn} [eV/f.u.]$";

  if (!isLoading) {
    return (
      <Wrapper>
        <Navigator>
          <div
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBlock: "30px",
            }}
          >
            <Img
              src={`/images/${result?.Phase}_pngs/${result?.name}.png`}
            ></Img>
            <div
              style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <H3>{result?.name}</H3>
            </div>
          </div>
          <Ul>
            <li>
              <A smooth to={"#overview"}>
                Overview
              </A>
            </li>
            <li>
              <A smooth to={"#crystal structure"}>
                Crystal Structure
              </A>
            </li>
            <li>
              <A smooth to={"#properties"}>
                Properties
              </A>
            </li>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: "80%",
                marginLeft: "60px",
              }}
            >
              <li>
                <A1 smooth to={"#elastic constants"}>
                  Elastic Constants
                </A1>
              </li>
              <li>
                <A1 smooth to={"#piezoelectric constants"}>
                  Piezoelectric Constant
                </A1>
              </li>
            </div>
            <li>
              <A smooth to={"#literature references"}>
                Literature References
              </A>
            </li>
          </Ul>
        </Navigator>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "400px",
          }}
        >
          <Section id="crystal structure"></Section>
          <HtmlWrapper>
            <PropertyH1>Crystal Structure</PropertyH1>
            <HtmlImg
              src={`/images/${result?.Phase}_pngs/${result?.name}.png`}
            ></HtmlImg>
          </HtmlWrapper>
          <Section id="properties"></Section>
          <Section id="overview" />

          <Div>
            <ul
              style={{
                width: "90%",
                height: "60%",
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              <PropertyH1 style={{ marginBottom: "20px" }}>
                Properties
              </PropertyH1>
              <Li1>
                <div>
                  <H1>Formula</H1>
                </div>
                <div>
                  <H2>{result?.name}</H2>
                </div>
              </Li1>
              <Li1>
                <div>
                  <H1>Phase</H1>
                </div>
                <div>
                  <H2>{result?.Phase}</H2>
                </div>
              </Li1>
              <Li1>
                <div>
                  <H1>Space Group</H1>
                </div>
                <div>
                  <H2>{result?.space_group}</H2>
                </div>
              </Li1>
              <Li1>
                <div>
                  <H1 style={{ fontSize: "10px", fontWeight: "bold" }}>
                    <Latex>{formation}</Latex>
                  </H1>
                </div>
                <div>
                  <H2>{parseFloat(result?.energy_form!).toFixed(2)}</H2>
                </div>
              </Li1>
              <Li1>
                <div>
                  <H1 style={{ fontSize: "10px", fontWeight: "bold" }}>
                    <Latex>{band}</Latex>
                  </H1>
                </div>
                <div>
                  <H2>{parseFloat(result?.Eg_pbe!).toFixed(2)}</H2>
                </div>
              </Li1>
              <Li1>
                <div>
                  <H1 style={{ fontSize: "10px", fontWeight: "bold" }}>
                    <Latex>{syn}</Latex>
                  </H1>
                </div>
                <div>
                  <H2>{parseFloat(result?.synthesis_index!).toFixed(2)}</H2>
                </div>
              </Li1>
            </ul>
            <PropertyH1>Lattice Constants</PropertyH1>
            {/* a,b,c, */}
            <table className="cool-table">
              <colgroup>
                <col className="width1" />
                <col className="width2" />
                <col className="width3" />
              </colgroup>
              <thead>
                <tr>
                  <Th>a</Th>
                  <Th>b</Th>
                  <Th>c</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{parseFloat(result?.latt_x!).toFixed(2)}</td>
                  <td>{parseFloat(result?.latt_y!).toFixed(2)}</td>
                  <td>{parseFloat(result?.latt_z!).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            {/* gamma */}

            <table className="cool-table">
              <colgroup>
                <col className="width1" />
                <col className="width2" />
                <col className="width3" />
              </colgroup>
              <thead>
                <tr>
                  <Th>&alpha;</Th>
                  <Th>&beta;</Th>
                  <Th>&gamma;</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{parseFloat(result?.angle_x!).toFixed(2)}</td>
                  <td>{parseFloat(result?.angle_y!).toFixed(2)}</td>
                  <td>{parseFloat(result?.angle_z!).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </Div>
        </div>
        <div style={{ width: "40%", marginLeft: "400px", marginTop: "100px" }}>
          <Section id="elastic constants" />
          <PropertiesWrapper>
            <MatrixWrapper>
              <PropertyH1>Elastic Constants</PropertyH1>
              <div>
                <Latex>{`$$\\begin{bmatrix}C_{11} & C_{12} & C_{13} \\\\ C_{21} & C_{22} & C_{23} \\\\ C_{31} & C_{32} & C_{33} \\end{bmatrix} = \\begin{bmatrix} ${result?.C11} & ${result?.C12} & -\\\\ ${result?.C21} & ${result?.C22} & - \\\\ - & - & -\\end{bmatrix}$$`}</Latex>
              </div>
            </MatrixWrapper>
          </PropertiesWrapper>
          <Section id="piezoelectric constants" />
          <PiezoWrapper>
            <MatrixWrapper>
              <PropertyH1>Piezoelectric Constant</PropertyH1>

              <PropertyH2>converse</PropertyH2>

              <div>
                <Latex>{`$$\\begin{bmatrix}e_{11} & e_{12} & e_{13} \\\\ e_{21} & e_{22} & e_{23} \\\\ e_{31} & e_{32} & e_{33} \\end{bmatrix} = \\begin{bmatrix} ${result?.e11} & - & -\\\\ - & ${result?.e22} & - \\\\ ${result?.e31} & ${result?.e32} & -\\end{bmatrix}$$`}</Latex>
              </div>
              <PropertyH2>direct</PropertyH2>

              <div>
                <Latex>{`$$\\begin{bmatrix} | d_{11} | & | d_{12} | & | d_{13} | \\\\ | d_{21} | & | d_{22} | & | d_{23} | \\\\ | d_{31} | & | d_{32} | & | d_{33} | \\end{bmatrix} = \\begin{bmatrix} ${result?.d11} & - & -\\\\ - & ${result?.d22} & - \\\\ ${result?.d31} & ${result?.d32} & -\\end{bmatrix}$$`}</Latex>
              </div>
            </MatrixWrapper>
          </PiezoWrapper>

          <Section id="literature references" />
          <PropertiesWrapper>
            <PropertyH1>Literature References</PropertyH1>
          </PropertiesWrapper>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <div className="spinner-container1">
        <div className="loading-spinner"></div>
      </div>
    );
  }
}

export default MaterialPage;

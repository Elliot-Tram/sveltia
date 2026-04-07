import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Sveltia - Guide independant des traitements GLP-1";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0c1e2b 0%, #0d4f47 50%, #0f766e 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#14b8a6",
            }}
          />
          <span
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Sveltia
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#ccfbf1",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Votre guide independant sur les traitements GLP-1
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          Ozempic - Wegovy - Mounjaro | Prix, avis et effets secondaires
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          sveltia.fr
        </div>
      </div>
    ),
    { ...size }
  );
}

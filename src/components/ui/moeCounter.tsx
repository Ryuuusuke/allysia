import { useEffect, useState } from "react";

export function MoeCounter({ size = 1 }) {
    const [svgContent, setSvgContent] = useState<string | null>(null);

    useEffect(() => {
        fetch(
            `counter/@allysia?name=allysia&theme=booru-lewd&padding=6&offset=0&align=top&scale=${size}&pixelated=1&darkmode=0`,
        )
            .then((res) => res.text())
            .then((data) => {
                setSvgContent(data);
            })
            .catch((err) => {
                console.error("Failed to fetch SVG:", err);
            });
    }, []);

    if (!svgContent) return <p>Counting...</p>;

    return (
        <div
            className="inline-block"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
}

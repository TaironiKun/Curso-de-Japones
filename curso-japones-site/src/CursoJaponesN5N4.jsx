
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sun, Moon } from "lucide-react";

export default function CursoJaponesN5N4() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "bg-zinc-900 text-white" : "bg-white text-black";
  }, [darkMode]);

  return (
    <main className={\`min-h-screen p-6 transition-colors duration-300 \${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"}\`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>
          Curso de Japonês N5/N4 - Taironi
        </h1>
        <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-purple-800" />}
        </Button>
      </div>

      <Tabs defaultValue="semana1" className="w-full">
        <TabsList className={darkMode ? "bg-zinc-800" : "bg-gray-200"}>
          <TabsTrigger value="semana1">Semana 1</TabsTrigger>
          <TabsTrigger value="semana2">Semana 2</TabsTrigger>
          <TabsTrigger value="semana3">Semana 3</TabsTrigger>
          <TabsTrigger value="semana4">Semana 4</TabsTrigger>
        </TabsList>

        <TabsContent value="semana1">
          <Card className={darkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-black"}>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>Dia 1</h2>
              <p>🎥 Anime: <a href="https://animelon.com/video/5f4e5e4926376c001f1a80cb" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Shirokuma Café Ep. 1</a></p>
              <p>📖 Mangá: <a href="https://yomou.me/works/2390" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Yotsuba to! Cap. 1</a></p>
              <p>🈶 Kanji do Dia: 日, 一, 人</p>
              <Textarea placeholder="Anotações ou frases aprendidas..." className={darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"} />
            </CardContent>
          </Card>

          <Card className={\`\${darkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-black"} mt-4\`}>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>Dia 2</h2>
              <p>🎥 Anime: <a href="https://animelon.com/video/5f4e5e4c26376c001f1a80c8" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Shirokuma Café Ep. 2</a></p>
              <p>📖 Mangá: <a href="https://mangadex.org/title/5e2f5a6b-74da-4bba-ae95-f4d28b35c7b2/doraemon" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Doraemon (JP)</a></p>
              <p>🈶 Kanji do Dia: 大, 本, 学</p>
              <Textarea placeholder="Anotações ou frases aprendidas..." className={darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="semana2">
          <Card className={darkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-black"}>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>Dia 1</h2>
              <p>🎥 Anime: <a href="https://animelon.com/video/5f4e5e5026376c001f1a80d0" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Shirokuma Café Ep. 3</a></p>
              <p>📖 Mangá: <a href="https://yomou.me/works/2390" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Yotsuba to! Cap. 2</a></p>
              <p>🈶 Kanji do Dia: 中, 小, 山</p>
              <Textarea placeholder="Anotações ou frases aprendidas..." className={darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"} />
            </CardContent>
          </Card>

          <Card className={\`\${darkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-black"} mt-4\`}>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>Dia 2</h2>
              <p>🎥 Anime: <a href="https://animelon.com/video/5f4e5e5426376c001f1a80d6" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Shirokuma Café Ep. 4</a></p>
              <p>📖 Mangá: <a href="https://mangadex.org/chapter/67b69a84-5208-46c7-8a3d-5e126b4222d1" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Doraemon (Cap. 2)</a></p>
              <p>🈶 Kanji do Dia: 川, 木, 校</p>
              <Textarea placeholder="Anotações ou frases aprendidas..." className={darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="semana3">
          <p className={darkMode ? "text-zinc-400" : "text-gray-500"}>(Conteúdo da semana 3 em construção...)</p>
        </TabsContent>
        <TabsContent value="semana4">
          <p className={darkMode ? "text-zinc-400" : "text-gray-500"}>(Conteúdo da semana 4 em construção...)</p>
        </TabsContent>
      </Tabs>
    </main>
  );
}

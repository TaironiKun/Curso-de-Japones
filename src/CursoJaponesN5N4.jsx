
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
    <main className={`min-h-screen p-6 transition-colors duration-300 ${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"}`}>
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
          {/* ... conteúdo da semana 1 ... */}
        </TabsContent>

        <TabsContent value="semana2">
          {/* ... conteúdo da semana 2 ... */}
        </TabsContent>

        <TabsContent value="semana3">
          {/* ... conteúdo da semana 3 ... */}
        </TabsContent>

        <TabsContent value="semana4">
          <Card className={darkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-black"}>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>Dia 1</h2>
              <p>🎥 Anime: <a href="https://animelon.com/video/5f4e5e5d26376c001f1a80e8" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Shirokuma Café Ep. 7</a></p>
              <p>📖 Mangá: <a href="https://yomou.me/works/2390" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Yotsuba to! Cap. 4</a></p>
              <p>🈶 Kanji do Dia: 学, 校, 時</p>
              <Textarea placeholder="Anotações ou frases aprendidas..." className={darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"} />
            </CardContent>
          </Card>

          <Card className={`${darkMode ? "bg-zinc-800 text-white" : "bg-gray-100 text-black"} mt-4`}>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#c084fc" : "#7e22ce" }}>Dia 2</h2>
              <p>🎥 Anime: <a href="https://animelon.com/video/5f4e5e6026376c001f1a80ee" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Shirokuma Café Ep. 8</a></p>
              <p>📖 Mangá: <a href="https://mangadex.org/chapter/878bc91d-4740-4095-9c4c-ecf674b1c72a" className="underline" style={{ color: darkMode ? "#d8b4fe" : "#6b21a8" }} target="_blank">Doraemon (Cap. 4)</a></p>
              <p>🈶 Kanji do Dia: 友, 語, 国</p>
              <Textarea placeholder="Anotações ou frases aprendidas..." className={darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

import React, { useEffect, useState, useRef } from 'react';

function FlowDemo() {
  const [mermaidLoaded, setMermaidLoaded] = useState(false);
  const flowchartRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // 动态加载 mermaid
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
    script.async = true;
    script.onload = () => {
      window.mermaid.initialize({ startOnLoad: true });
      setMermaidLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // 监听滚动事件,控制返回顶部按钮的显示
    const handleScroll = () => {
      setShowScrollToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 点击流程图节点,跳转到对应prompt
  const handleNodeClick = (nodeId) => {
    const element = document.getElementById(nodeId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 返回顶部
  const scrollToTop = () => {
    flowchartRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // 将 bodyStyle 中的背景色改为白色，字体颜色改为黑色
  const bodyStyle = {
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    lineHeight: 1.6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const flowchartContainerStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  };
  const containerStyle = {
    display: 'flex',
    width: '100%',
  };

  const navStyle = {
    width: '15%',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflowY: 'auto',
    borderRight: '1px solid #ddd',
  };

  const navItemStyle = {
    marginBottom: '10px',
    cursor: 'pointer',
    color: '#333',
    transition: 'color 0.3s ease',
  };

  const contentStyle = {
    width: '85%',
    padding: '20px',
  };

  const annotationStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
  };
  const annotationH3Style = {
    marginTop: 0,
    marginBottom: '10px',
    fontSize: '20px',
    color: '#0074D9',
  };
  const preStyle = {
    background: '#f8f8f8',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
    margin: '15px 0 0 0',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
    fontSize: '14px',
    lineHeight: 1.6,
  };

  return (
    <div style={bodyStyle}>
      <h1 style={{ textAlign: 'center' }}>HOLLMWOOD Flow Demo - Full Prompts</h1>

      {/* 流程图容器 */}
      {mermaidLoaded && (
        <div ref={flowchartRef} className="flowchart-container mermaid" style={flowchartContainerStyle}>
          {`
flowchart TB
    A0(开始 Start) --> A1["输入初步故事线<br>Preliminary Storyline"]
    A1 --> B0["Writer 1 撰写角色草稿<br>Character Design"]
    click B0 href "#B0"
    B0 --> B1["编辑审阅角色<br>Editor Feedback"]
    click B1 href "#B1"
    B1 --> B2{"编辑是否满意<br>或达到最大循环次数?"}
    B2 -- 否/需要修改 --> B3["New Writer 修改角色草稿"]
    click B3 href "#B3"
    B3 --> B1
    B2 -- 是 --> C0["Writer/新Writer 撰写故事大纲<br>Outline Formulation"]
    click C0 href "#C0"
    C0 --> C1["编辑审阅大纲<br>Editor Feedback"]
    click C1 href "#C1"
    C1 --> C2{"编辑是否满意<br>或达到最大循环次数?"}
    C2 -- 否/需要修改 --> C3["Writer/新Writer 修改故事大纲"]
    click C3 href "#C3"
    C3 --> C1
    C2 -- 是 --> D0["编剧扩写子情节并生成章节文本<br>Story Expansion & Chapter Generation"]
    click D0 href "#D0"
    D0 --> E0["编剧草拟剧本<br>Script Drafting"]
    click E0 href "#E0"
    E0 --> F0["角色扮演<br>Role-Playing"]
    click F0 href "#F0"
    F0 --> G0["输出完整剧本<br>Final Screenplay"]
    G0 --> H0(结束 End)
          `}
        </div>
      )}

      <hr className="my-8" style={{ width: '100%' }} />

      <div style={containerStyle}>
        <nav style={navStyle}>
          <div onClick={() => handleNodeClick('B0')} style={navItemStyle}>B0: Writer 1 撰写角色草稿</div>
          <div onClick={() => handleNodeClick('B1')} style={navItemStyle}>B1: 编辑审阅角色</div>
          <div onClick={() => handleNodeClick('C0')} style={navItemStyle}>C0: Writer/新Writer 撰写大纲</div>
          <div onClick={() => handleNodeClick('C1')} style={navItemStyle}>C1: 编辑审阅大纲</div>
          <div onClick={() => handleNodeClick('B3')} style={navItemStyle}>B3: 新Writer 修改角色草稿</div>
          <div onClick={() => handleNodeClick('C3')} style={navItemStyle}>C3: Writer/新Writer 修改故事大纲</div>
          <div onClick={() => handleNodeClick('D0')} style={navItemStyle}>D0: 编剧扩写子情节并生成章节文本</div>
          <div onClick={() => handleNodeClick('E0')} style={navItemStyle}>E0: 编剧草拟剧本</div>
          <div onClick={() => handleNodeClick('F0')} style={navItemStyle}>F0: 角色扮演</div>
        </nav>

        <div style={contentStyle}>
          <h2 style={{ textAlign: 'center' }}>Prompts with Annotations</h2>

          {/* B0: Writer 1 撰写角色草稿 */}
          <div className="annotation" id="B0" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 B0: Writer 1 撰写角色草稿 (Character Design)</h3>
            <pre style={preStyle}>
{`Writer System Prompt:
You are a skilled Screenplay Writer from Hollywood specializing in the creation of vivid characters, you excel at developing movie characters for a given preliminary storylines. Your expertise lies in bringing depth to the narrative, ensuring that each character resonates with authenticity.
In the realm of cinematic storytelling, characters hold a pivotal role. Their intrinsic motivations and interactions serve as the driving force behind the entire narrative arc.
The character you are tasked with designing should feature both the character's full name and a succinct introduction.
The character's full name should be realistic and does not include any special symbols.
The character's introduction should be concise yet story-relevant, encompassing aspects such as gender, age, appearance, background, personality traits, experiences, goals, motivations, conflicts, developments, relationships with other characters, and other pertinent details.
The number of characters should be around 3 to 6 and well aligned with the needs of story.

Writer User Prompt:
Design characters that seamlessly integrate with the provided storyline: Storyline:
 [preliminary storyline]
The characters you design should adhere to the following format:
<characters>
  <character_1>
    <full_name>character_1's full name</full_name>
    <character_introduction>character_1's introduction</character_introduction>
  </character_1>
  <character_2>
    ...
  </character_2>
  ...
</characters>
Ensure strictly adherence to the above format and avoid generating superfluous content.

Table 11: Prompt used to make the writer generate an initial version of characters. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 B1 */}
          <div className="annotation" id="B1" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 B1: 编辑审阅角色 (Editor Feedback)</h3>
            <pre style={preStyle}>
{`Editor System Prompt:
You are an Editor with expertise in providing guidance to enhance the Writer's written characters within a movie's storyline.
Your role is to offer constructive advice on improving the story characters (<characters>) written by the Writer based on the provided storyline.
When providing feedback, please pay close attention to the following aspects of character design:
1.  Assess whether the designed character introductions align harmoniously with the given storyline.
2.  Evaluate the relationships between characters for their reasonableness, depth, interest, and complexity rather than being overly simplistic.
3.  Assess if the designed characters are captivating and able to engage the audience effectively.
4.  Assess whether the character introductions adhere to logical consistency.
5.  Other aspects you consider important.
If you identify any issues in these aspects within the content provided by the Writer, provide precise and concise suggestions for revisions in those problematic areas.
Your advice on how to improve the story characters should follow the format below:
<advice> Your advice
</advice>
When you feel that there are no more revisions to be made to the current story characters, reply with <advice>None</advice>.
Strictly obey this format and do not generate redundant content!

Editor User Prompt:
Give advice on how to enhance the initial version of the movie story characters written by the Writer based on the following storyline:
Storyline:
 
The initial version of the movie story characters written by the Writer:
<characters>
</characters>

Table 12: Prompt used to make the editor generate feedback on the writer-generated initial version of characters. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 C0 */}
          <div className="annotation" id="C0" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 C0: Writer/新Writer 撰写故事大纲 (Outline Formulation)</h3>
            <pre style={preStyle}>
{`Writer System Prompt:
You are a skilled Screenplay Writer from Hollywood specializing in the creation of compelling outlines, you excel at developing movie outlines for a given preliminary storylines. Your expertise lies in bringing depth to the narrative, ensuring that each plot point is engagingly crafted to keep audiences captivated.
Your task is to create a two-level hierarchical outline. In this structured outline, each top-level plot serves as a concise summary of its corresponding subplots, and subplots are the main events that occur under their corresponding top-level plot.
The top-level plot or subplot consists of Plot, Scene (where the plot happens), Characters (who are involved in that plot). The plot needs to be specific, with dramatic conflict that captures the audience's attention and resonates with them. Characters must be selected from the given list of characters and Characters must be full names in the given list of characters.
Maintain coherence and consistency throughout your two-level hierarchical outline.
IMPORTANT: Make sure that the story outline has a clear ending, whether good or bad, it should keep the audience coming back for more.
The outline you generate should follow the format below:
<outline>
<plot_1>
The content of the top-level bullet plot 1
</plot_1>
<plot_1a>
The content of the subplot 1a
</plot_1a>
<plot_1b>
The content of the subplot 1b
</plot_1b>
...
<plot_2>
The content of the top-level bullet plot 2
</plot_2>
<plot_2a>
The content of the subplot 2a
</plot_2a>
...
</outline>
Here is an example for reference:
<outline>
<plot_1>
Ava discovers the magical app and begins to use it to alter reality, but she soon realizes that the app's magic comes at a terrible price.
Scene: Characters: Ava Rose
</plot_1>
<plot_1a>
Ava discovers the app and starts to use it to improve her life and the lives of her friends. Scene: the town where Ava lives. Characters: Ava Rose
</plot_1a>
<plot_1b>
Ava's friends become suspicious of her sudden changes and start to distance themselves from her. Scene: the town where Ava lives. Characters: Ava Rose
</plot_1b>
...
<plot_2>
Ava confides in her best friend, Tess, about the app's dark side, and the two girls try to figure out a way to stop the app's power from consuming Ava's life.
Scene: Characters: Ava Rose, Tess Sawyer
</plot_2>
<plot_2a>
...
</plot_2a>
...
</outline>
Strictly obey the above format and do not generate any redundant content!

Writer User Prompt:
Generate the outline based on the provided storyline and characters: Storyline:
Characters:
Strictly obey the given output format and do not generate redundant content!

Table 13: Prompt used to make the writer generate an initial version of the outline. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 C1 */}
          <div className="annotation" id="C1" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 C1: 编辑审阅大纲 (Editor Feedback)</h3>
            <pre style={preStyle}>
{`Editor System Prompt:
You're an Editor who excels at providing insightful guidance to enhance the movie story outline crafted by the Writer.
Your task is to offer advice on how to improve the existing story outline (<outline>) created by the Writer, taking into account the provided storyline (<storyline>) and characters (<characters>) of the story.
When providing feedback, please focus on the following aspects of the outline:
1.  Evaluate whether the development of the story outline aligns harmoniously with the storyline and character introductions.
2.  Assess whether the contents of the story outline are coherent, and whether there are any conflicts or poor transitions between plot points.
3.  Assess whether the outline adheres to logical consistency.
4.  Evaluate whether the outline makes up an interesting, engaging, and thought-provoking story.
5.  Assess whether the outline has a clear ending.
6.  Other aspects you consider important.
If the content written by the Writer has issues in these aspects, you need to provide detailed revision suggestions for the problematic areas concisely. Your advice on how to improve the story outline (<outline>) should follow the format below:
<advice> Your advice
</advice>
When you feel that there are no more revisions to be made to the current story outline, please reply only with <advice>None</advice>.
Strictly obey this format and do not generate redundant content!

Editor User Prompt:
Give advice on how to improve the initial version of the story outline (<outline>) written by the Writer based on the following storyline (<storyline>) and characters (<characters>):
Storyline:
The based characters:
<characters>
</characters>
The initial version of the story outline written by the Writer:
<outline>
</outline>

Table 14: Prompt used to make the editor generate feedback on the writer's initial version of the outline. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 B3 */}
          <div className="annotation" id="B3" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 B3: Writer/新Writer 修改角色草稿</h3>
            <pre style={preStyle}>
{`Writer User Prompt for Revising Characters:
Here is the Editor's feedback on the story characters you recently generated:
<advice>
</advice>
Please revise your generated story characters based on the advice. The storyline originally given to you was:
Storyline:
Keep the format of the story characters same as the one before your revision.

Table 15a: Prompt used to make the writer revise the characters based on feedback suggestions provided by the editor. This prompt will be spliced behind the writer's corresponding historical prompts and fed into the model together. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 C3 */}
          <div className="annotation" id="C3" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 C3: Writer/新Writer 修改故事大纲</h3>
            <pre style={preStyle}>
{`Writer User Prompt for Revising the Outline:
Here is the Editor's feedback on the story outline you recently wrote:
<advice>
</advice>
Please revise your written story outline based on the advice. The storyline and characters originally given to you were: Storyline:
 
Characters:
Keep the format of the story outline same as the one before your revision.

Table 15b: Prompt used to make the writer revise the outline based on feedback suggestions provided by the editor. This prompt will be spliced behind the writer's corresponding historical prompts and fed into the model together. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 D0 */}
          <div className="annotation" id="D0" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 D0: 编剧扩写子情节并生成章节文本 (Story Expansion & Chapter Generation)</h3>
            <pre style={preStyle}>
{`Writer System Prompt:
You are a writer, your task is to expand upon one of the story plot points in an existing story outline, transforming it into a complete story chapter while maintaining coherence and consistency with the previous happened story content. The story needs to be specific, with dramatic conflict that captures the audience's attention and resonates with them.

Writer User Prompt:
The current story plot point you need to expand is:
<plot_point>
</plot_point>
The input storyline is:
<storyline>
</storyline>
The scene where the current story plot point happens is:
The current story plot point involves the following characters:
<characters>

</characters>
The previous story contents that have taken place are as follows:
 
Now, please expand the current given story plot point (<plot_point>) in a story outline into a chapter of complete story content which keeps coherent with the previous happened story content. Feel free to add details around the plot point but avoid deviating too far from it. While you have the flexibility to introduce additional details surrounding the plot point, it is essential to stay aligned with the original plot point's core content. To maintain conciseness, the expanded word count should be as minimal as possible, effectively unfolding the plot point while creating a complete story chapter. Your output format for the expanded story content should strictly follow:
<chapter>
The story chapter you have expanded
</chapter>
Please adhere strictly to this format and refrain from including any unnecessary content!

Table 17: Prompt used to make the writer expand the subplots in the outline into story chapters and generate detailed chapter content.`}
            </pre>
          </div>

          {/* 对应节点 E0 */}
          <div className="annotation" id="E0" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 E0: 编剧草拟剧本 (Script Drafting)</h3>
            <pre style={preStyle}>
{`Writer System Prompt:
You are a scriptwriter, and you need to adapt a given chapter (<chapter>) of a story into a script draft composed of the smallest events that happen sequentially. The adapted script draft consists of two kinds of elements: Scene Heading (<scene_heading>) and Character Performance (<character_performance>) events. The content of Scene Heading (<scene_heading>) describes the location and time of day for a particular scene. It includes three components: INT. (Interior) or EXT. (Exterior), the specific location, and the time of day (DAY or NIGHT or ...). Character Performance (<character_performance>) is a smallest event describing the performance and interactions of individual characters using simple declarative sentences. The content of Character Performance (<character_performance>) includes the character's name (<character>) and the character's performance (<performance>). The character's name (<character>) must be the full name of the provided involved character! The character's performance (<performance>) should align with the character's introduction. The first thing in each script draft must be a Scene Heading (<scene_heading>), indicating the opening scene of the movie chapter. Each script draft has one and only one Scene Heading at the beginning. Following the Scene Heading, there are numerous Character Performance (<character_performance>) events that sequentially take place in that scene. You need to plan the script carefully, generating Scene Heading (<scene_heading>) and then Character Performance (<character_performance>) events step by step and make them sequential narratives. The contents of the script draft should be coherent.

Writer User Prompt:
An example of adapting a chapter of story into a script draft is as follows:
<example>
<chapter>
At first light, in Emma Taylor's room, Dorothy Smith serves porridge to persuade Emma Taylor to eat, and Emma Taylor smashes the bowl to show her refusal...
</chapter>
<scene>
Inside Emma Taylor's room.
</scene>
<involved_characters> Dorothy Smith, Emma Taylor
</involved_characters>
<script_draft>
<scene_heading>
INT.; Inside Emma Taylor's room; DAY.
</scene_heading>
<character_performance>
<character>Dorothy Smith</character>
<performance>Dorothy Smith enters the room and walks over to Emma with porridge to persuade Emma to eat.</performance>
</character_performance>
<character_performance>
<character>Emma Taylor</character>
<performance>Emma smashes the bowl, saying she won't eat.</performance>
</character_performance>
<character_performance>
<character>Dorothy Smith</character>
<performance>...</performance>
</character_performance>
...
</script_draft>
</example>
The story chapter (<chapter>) that is now to be adapted into a script draft is:
<chapter>
 [story chapter]  
</chapter>
The scene (<scene>) in which this chapter of story takes place is:
 
 <scene>[scene]</scene>   This story chapter involves the following characters:
<involved_characters>
 [involved characters' introductions]  
</involved_characters>
So, Character Performance (<character_performance>) events in your written script draft should only involve these characters (<involved_characters>).
Now, please adapt the current given story chapter (<chapter>) into a script draft composed of the smallest events that happen sequentially. The output format for the script draft should strictly follow:
<script_draft> Your script draft
</script_draft>
Please adhere strictly to this format and refrain from including any irrelevant content!

Table 18: Prompt used to make the writer adapt a story chapter obtained in the previous step into a script draft. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>

          {/* 对应节点 F0 */}
          <div className="annotation" id="F0" style={annotationStyle}>
            <h3 style={annotationH3Style}>对应节点 F0: 角色扮演 (Role-Playing)</h3>
            <pre style={preStyle}>
{`Actor System Prompt:
You are an actor, and the character you will play is:
 <role_name>[role name]</role_name>.   
Your character introduction is:
 <role_intro>[role introduction]</role_intro>   
You have to interactively act out a script with other characters or act out a script on your own. Each time you will be given a rough performance guide (<performance_guide>) of what you should perform. Your task is to execute this rough performance guide (<performance_guide>) as a real actor in the movie. Your performance (<detailed_performance>) should consist of four components: Character (<character>), Action (<action>), Parenthetical (<parenthetical>), and Dialogue (<dialogue>). The Character (<character>) specifies your character name (<role_name>). The Action (<action>) describes the action and event taking place in the current scene. It is written in present tense and provides a visual description of what the audience will see on the screen. The Dialogue (<dialogue>) describes your lines, which the audience will hear. Note that lines need to be as concise and powerful as they are in real movies. The Parenthetical (<parenthetical>) is sometimes used to provide additional direction or information about how a line of dialogue should be delivered. It can be tone of voice, expression, talking to whom, and so on. Some examples of Parenthetical are (cautiously), (to someone), and so on. Depending on the requirements of the performance, some of these three components (Action, Parenthetical, and Dialogue) can be empty in some cases. If some component is empty, you should generate <component></component>. If the content of Dialogue is empty, the content of Parenthetical must also be empty. Your detailed performance (<detailed_performance>) must align with the performance guide, be concise, maintain coherence with the past performance history and reflect your character introduction (<role_intro>).

Actor User Prompt:
Some examples of transforming a rough performance guide into a detailed performance are as follows:
<examples>
<example>
<performance_guide>
Dorothy Smith enters the room with the porridge and walks over to Emma Taylor.
</performance_guide>
<scene>
INT.; Inside Emma Taylor's room; DAY.
</scene>
<detailed_performance>
<character>Dorothy Smith</character>
<action>Dorothy Smith enters the room, sets down various dishes, carries a bowl of hot porridge, and walks over to Emma Taylor.</action>
<parenthetical></parenthetical>
<dialogue></dialogue>
</detailed_performance>
</example>
<example>
<performance_guide>
Dorothy Smith cautiously persuades Emma Taylor to eat.
</performance_guide>
<scene>
INT.; Inside Emma Taylor's room; DAY.
</scene>
<detailed_performance>
<character>Dorothy Smith</character>
<action></action>
<parenthetical>(cautiously, to Emma Taylor)</parenthetical>
<dialogue>My miss, you still have to take care of your body, so just eat something.</dialogue>
</detailed_performance>
</example>
<example>
<performance_guide>
Emma Taylor drops her bowl and capriciously says she won't eat.
</performance_guide>
<scene>
INT.; Inside Emma Taylor's room; DAY.
</scene>
 
<detailed_performance>
<character>Emma Taylor</character>
<action>Emma Taylor slams her bowl on the floor.</action>
<parenthetical>(capriciously, to Dorothy Smith)</parenthetical>
<dialogue>No no no, I just won't eat!</dialogue>
</detailed_performance>
</example>
</examples>
Now, the performance guide (<performance_guide>) given to you is:
<performance_guide>
 [performance guide (one event in the script draft)] 
</performance_guide>
The scene (<scene>) in which this performance takes place is:
 <scene>[scene]</scene>   
The entire script involves the following character(s):
<involved_characters>
 [involved characters' introductions] 
</involved_characters>
The history (if any) of the actors' performances regarding the preceding events in the current episode's script draft:
<act_history>
 [actors' acting history] 
</act_history>
Your detailed performance should only involve your own performance on the performance guide (<performance_guide>) in detail.
Now, please transform the current given performance guide (<performance_guide>) into a detailed performance (<detailed_performance>). The output format for your detailed performance should strictly follow:
<detailed_performance> Your detailed performance
</detailed_performance>
Please adhere strictly to this format and refrain from including any unnecessary content!

Table 19: Prompt used to make the actor be initialized and interpret the corresponding event in the script draft in detail.
 [actors' acting history]  changes dynamically as the performance progresses. The content within [] in the yellow highlighted text is the input that makes up the prompt and varies with the different samples.`}
            </pre>
          </div>
        </div>
      </div>

      {/* 返回顶部悬浮按钮 */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#0074D9',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 999,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0063aa'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0074D9'}  
        >
          <span>&#8593;</span>
        </button>
      )}

      {/* 使节点在Hover时变色的样式 */}
      <style>{`
        .mermaid .node a:hover rect,
        .mermaid .node a:hover polygon,
        .mermaid .node a:hover path {
          fill: #b3d9ff !important;  /* 改为更明显的浅蓝色 */
          cursor: pointer;
          transition: fill 0.3s ease;  /* 添加过渡效果 */
          opacity: 0.9;  /* 轻微调整透明度 */
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);  /* 添加轻微阴影效果 */
        }
      `}</style>

    </div>
  );
}

export default FlowDemo;

const SAMPLE_TEXT = `同学们好，今天我们来讲第三章——需求与供给。这一章非常重要，是整个微观经济学的基础，大家一定要认真听。

首先，什么是需求？需求是指在一定时期内，在各种可能的价格水平下，消费者愿意并且能够购买的商品数量。这里有两个关键点：第一，消费者愿意买；第二，消费者买得起。这两个条件缺一不可。如果只有购买意愿而没有购买能力，那不能算作需求。

我要强调一下，需求定理是考试的重点，大家一定要记住。需求定理表明，在其他条件不变的情况下，商品的价格越高，消费者对商品的需求量就越小；反之，价格越低，需求量越大。这是微观经济学最基本的定理之一，几乎每年都会考。

那么，为什么价格和需求量会呈反向变动呢？主要有两个效应在起作用：第一个是替代效应，就是说当一种商品价格上升时，消费者会用其他类似的商品来替代它；第二个是收入效应，就是价格上升相当于消费者的实际收入下降了，购买力降低了。

接下来我们看供给。什么是供给？供给是指在一定时期内，在各种可能的价格水平下，生产者愿意并且能够提供出售的商品数量。和需求一样，供给也需要同时满足两个条件：一是生产者愿意出售，二是生产者有能力提供。

供给定理和需求定理正好相反，这个大家对比着记。供给定理表明，在其他条件不变的情况下，商品的价格越高，生产者的供给量就越大；价格越低，供给量越小。道理很简单，价格越高，生产者越有利可图，就越愿意多生产。

下面我们来讲市场均衡，这是这一章的核心概念。市场均衡是指市场上供给和需求达到平衡的状态，也就是供给量等于需求量时的状态。这个时候的价格叫做均衡价格，这个时候的数量叫做均衡数量。

我再强调一遍，均衡价格的形成是市场供求双方自发作用的结果，不是人为规定的。当市场价格高于均衡价格时，供给量大于需求量，出现过剩，生产者为了把商品卖出去，会降价销售；当市场价格低于均衡价格时，需求量大于供给量，出现短缺，消费者为了买到商品，愿意出更高的价格。这样通过价格的波动，市场最终会趋向均衡。

最后，我们来看看影响需求和供给的因素。影响需求的因素主要有：商品本身的价格、消费者的收入水平、相关商品的价格（包括替代品和互补品）、消费者的偏好、消费者对未来的预期等等。影响供给的因素主要有：商品本身的价格、生产成本、生产技术水平、相关商品的价格、生产者对未来的预期等。

好，今天的内容就讲到这里。课后大家把第三章的习题做一下，特别是需求定理和市场均衡的部分，这些都是必考内容。下次课我们会讲弹性理论，大家可以提前预习一下。`;

const SAMPLE_NOTES = {
    title: '第三章 需求与供给',
    sections: [
        {
            id: 'section-1',
            num: '01',
            title: '需求的基本概念',
            content: [
                {
                    type: 'paragraph',
                    text: '需求是指在一定时期内，在各种可能的价格水平下，消费者<span class="highlight-yellow">愿意并且能够购买</span>的商品数量。'
                },
                {
                    type: 'callout',
                    label: '核心要点',
                    text: '需求必须同时满足两个条件：<strong>购买意愿</strong>和<strong>购买能力</strong>，二者缺一不可。只有意愿没有能力，或者只有能力没有意愿，都不能形成需求。'
                },
                {
                    type: 'list',
                    items: [
                        {
                            title: '购买意愿',
                            desc: '消费者主观上想要购买该商品，有消费的欲望和需求。'
                        },
                        {
                            title: '购买能力',
                            desc: '消费者客观上有足够的收入或财富来支付商品价格。'
                        }
                    ]
                }
            ]
        },
        {
            id: 'section-2',
            num: '02',
            title: '需求定理',
            content: [
                {
                    type: 'paragraph',
                    text: '<span class="keypoint-tag">必考</span><span class="highlight-pink">需求定理</span>表明：在其他条件不变的情况下，商品的价格越高，消费者对商品的需求量就越小；反之，价格越低，需求量越大。'
                },
                {
                    type: 'paragraph',
                    text: '需求定理是微观经济学<span class="highlight-green">最基本的定理之一</span>，是理解整个市场运行机制的基础。'
                },
                {
                    type: 'callout',
                    label: '为什么价格与需求量反向变动？',
                    text: '两个效应共同作用的结果：<br><br><strong>1. 替代效应</strong> — 一种商品价格上升时，消费者会用其他类似商品来替代它。<br><strong>2. 收入效应</strong> — 价格上升相当于消费者实际收入下降，购买力降低。'
                }
            ]
        },
        {
            id: 'section-3',
            num: '03',
            title: '供给的基本概念',
            content: [
                {
                    type: 'paragraph',
                    text: '供给是指在一定时期内，在各种可能的价格水平下，生产者<span class="highlight-yellow">愿意并且能够提供出售</span>的商品数量。'
                },
                {
                    type: 'paragraph',
                    text: '和需求类似，供给也需要同时满足两个条件：一是生产者<span class="highlight-green">愿意出售</span>，二是生产者<span class="highlight-green">有能力提供</span>。'
                }
            ]
        },
        {
            id: 'section-4',
            num: '04',
            title: '供给定理',
            content: [
                {
                    type: 'paragraph',
                    text: '供给定理和需求定理正好相反，大家可以<span class="highlight-yellow">对比着记忆</span>。'
                },
                {
                    type: 'paragraph',
                    text: '供给定理表明：在其他条件不变的情况下，商品的价格越高，生产者的供给量就越大；价格越低，供给量越小。'
                },
                {
                    type: 'callout',
                    label: '理解提示',
                    text: '价格越高，生产者越有利可图，就越愿意多生产、多销售。这是由利润最大化的动机决定的。'
                }
            ]
        },
        {
            id: 'section-5',
            num: '05',
            title: '市场均衡',
            content: [
                {
                    type: 'paragraph',
                    text: '<span class="keypoint-tag">核心考点</span>市场均衡是指市场上供给和需求达到平衡的状态，也就是<span class="highlight-pink">供给量等于需求量</span>时的状态。'
                },
                {
                    type: 'list',
                    items: [
                        {
                            title: '均衡价格',
                            desc: '市场达到均衡时的价格水平，由供给和需求共同决定。'
                        },
                        {
                            title: '均衡数量',
                            desc: '市场达到均衡时的交易数量，即供给量等于需求量时的数量。'
                        }
                    ]
                },
                {
                    type: 'callout',
                    label: '均衡价格如何形成？',
                    text: '<strong>均衡价格是市场自发形成的</strong>，不是人为规定的。<br><br>• 价格高于均衡价格 → 供给 > 需求 → 过剩 → 生产者降价<br>• 价格低于均衡价格 → 需求 > 供给 → 短缺 → 消费者抬价<br><br>通过价格的波动，市场最终会趋向均衡状态。'
                }
            ]
        },
        {
            id: 'section-6',
            num: '06',
            title: '影响供需的因素',
            content: [
                {
                    type: 'paragraph',
                    text: '影响需求和供给的因素有很多，大家要注意区分，不要混淆。'
                },
                {
                    type: 'list',
                    items: [
                        {
                            title: '影响需求的因素',
                            desc: '商品本身价格、消费者收入水平、相关商品价格（替代品/互补品）、消费者偏好、对未来的预期。'
                        },
                        {
                            title: '影响供给的因素',
                            desc: '商品本身价格、生产成本、生产技术水平、相关商品价格、生产者对未来的预期。'
                        }
                    ]
                }
            ]
        }
    ],
    stats: {
        highlights: 12,
        keypoints: 3
    },
    flashcards: [
        { question: '什么是需求？', answer: '需求是指在一定时期内，在各种可能的价格水平下，消费者愿意并且能够购买的商品数量。必须同时满足购买意愿和购买能力两个条件。' },
        { question: '需求定理的内容是什么？', answer: '在其他条件不变的情况下，商品的价格越高，消费者对商品的需求量就越小；反之，价格越低，需求量越大。价格与需求量呈反向变动关系。' },
        { question: '为什么价格和需求量呈反向变动？', answer: '两个效应共同作用：\n1. 替代效应：商品价格上升，消费者用其他类似商品替代\n2. 收入效应：价格上升相当于实际收入下降，购买力降低' },
        { question: '什么是供给？', answer: '供给是指在一定时期内，在各种可能的价格水平下，生产者愿意并且能够提供出售的商品数量。需要同时满足出售意愿和供给能力两个条件。' },
        { question: '供给定理的内容是什么？', answer: '在其他条件不变的情况下，商品的价格越高，生产者的供给量就越大；价格越低，供给量越小。价格与供给量呈同向变动关系。' },
        { question: '什么是市场均衡？', answer: '市场均衡是指市场上供给和需求达到平衡的状态，即供给量等于需求量时的状态。此时的价格称为均衡价格，数量称为均衡数量。' },
        { question: '均衡价格是如何形成的？', answer: '均衡价格是市场供求双方自发作用的结果：\n• 价格高于均衡价格 → 供给>需求 → 过剩 → 降价\n• 价格低于均衡价格 → 需求>供给 → 短缺 → 抬价\n通过价格波动，市场最终趋向均衡。' },
        { question: '影响需求的主要因素有哪些？', answer: '1. 商品本身的价格\n2. 消费者的收入水平\n3. 相关商品的价格（替代品、互补品）\n4. 消费者的偏好\n5. 消费者对未来的预期' },
        { question: '影响供给的主要因素有哪些？', answer: '1. 商品本身的价格\n2. 生产成本\n3. 生产技术水平\n4. 相关商品的价格\n5. 生产者对未来的预期' }
    ],
    knowledge: {
        tags: ['需求', '需求定理', '供给', '供给定理', '市场均衡', '替代效应', '收入效应', '均衡价格'],
        graph: [
            { source: '需求', target: '需求定理', type: '定义' },
            { source: '需求定理', target: '替代效应', type: '解释' },
            { source: '需求定理', target: '收入效应', type: '解释' },
            { source: '供给', target: '供给定理', type: '定义' },
            { source: '需求', target: '市场均衡', type: '构成' },
            { source: '供给', target: '市场均衡', type: '构成' },
            { source: '市场均衡', target: '均衡价格', type: '产生' }
        ]
    }
};

let state = {
    currentView: 'home',
    notes: null,
    currentCardIndex: 0,
    cardFlipped: false,
    studiedCards: new Set()
};

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const MIMO_API_URL = 'https://api.xiaomimimo.com/v1/chat/completions';
const MIMO_ASR_MODEL = 'mimo-v2.5-asr';

function getApiKey() {
    const DEFAULT_KEY = 'sk-561e50b42ca54ff99a828a43b0cb48a5';
    return localStorage.getItem('deepseek_api_key') || DEFAULT_KEY;
}

function getMimoApiKey() {
    const DEFAULT_MIMO_KEY = 'sk-cgzc2besysjxayg8qxd2wiq3882rugdi4uum8jgazit2i6po';
    return localStorage.getItem('mimo_api_key') || DEFAULT_MIMO_KEY;
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function transcribeWithMiMo(audioFile) {
    const apiKey = getMimoApiKey();
    if (!apiKey) {
        throw new Error('NO_MIMO_API_KEY');
    }

    const base64Data = await fileToBase64(audioFile);
    
    // 尝试两种认证方式
    const authHeaders = [
        { 'api-key': apiKey },
        { 'Authorization': `Bearer ${apiKey}` }
    ];
    
    let lastError = null;
    
    for (const headers of authHeaders) {
        try {
            const response = await fetch(MIMO_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify({
                    model: MIMO_ASR_MODEL,
                    messages: [
                        {
                            role: 'user',
                            content: [
                                {
                                    type: 'input_audio',
                                    input_audio: {
                                        data: base64Data
                                    }
                                }
                            ]
                        }
                    ],
                    asr_options: {
                        language: 'zh'
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                lastError = new Error(`HTTP ${response.status}: ${errorText.slice(0, 200)}`);
                continue;
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (e) {
            lastError = e;
            // CORS错误或网络错误，继续下一种方式
            console.warn('认证方式失败:', e.message);
        }
    }
    
    throw lastError || new Error('所有认证方式均失败');
}

async function callDeepSeek(text, courseName, teacherName) {
    const apiKey = getApiKey();
    if (!apiKey) {
        throw new Error('NO_API_KEY');
    }

    const systemPrompt = `你是一个专业的课堂笔记整理助手。请将用户提供的课堂录音转写文本，整理成结构化的学习笔记。

要求：
1. 提取核心知识点，分章节整理
2. 用<hl-yellow>标签标记重点内容，用<hl-pink>标签标记必考考点，用<hl-green>标签标记老师强调的内容
3. 在关键定义旁标注【必考】标签
4. 生成知识图谱的标签和关联关系
5. 生成复习用的问答卡片

请严格按照以下JSON格式返回（不要有多余文字）：
{
  "title": "章节标题",
  "sections": [
    {
      "id": "section-1",
      "num": "01",
      "title": "小节标题",
      "content": [
        { "type": "paragraph", "text": "段落内容，支持HTML标签" },
        { "type": "callout", "label": "提示/注意/重点", "text": "强调内容" },
        { "type": "list", "items": [{"title": "列表项标题", "desc": "列表项描述"}] }
      ]
    }
  ],
  "stats": { "highlights": 12, "keypoints": 3 },
  "knowledge": {
    "tags": ["知识点1", "知识点2"],
    "graph": [{ "source": "知识点A", "target": "知识点B", "type": "定义/解释/构成/产生" }]
  },
  "flashcards": [{ "question": "问题", "answer": "答案" }]
}`;

    const userPrompt = `课程：${courseName || '未命名课程'}\n教师：${teacherName || '未知教师'}\n\n课堂内容：\n${text}`;

    const response = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            temperature: 0.7,
            max_tokens: 4000,
            response_format: { type: 'json_object' }
        })
    });

    if (!response.ok) {
        throw new Error(`API_ERROR:${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    const notesData = JSON.parse(content);

    notesData.sections.forEach((section, idx) => {
        section.id = `section-${idx + 1}`;
        section.num = String(idx + 1).padStart(2, '0');
        section.content.forEach(item => {
            if (item.text) {
                item.text = item.text
                    .replace(/<hl-yellow>/g, '<span class="highlight-yellow">')
                    .replace(/<\/hl-yellow>/g, '</span>')
                    .replace(/<hl-pink>/g, '<span class="highlight-pink">')
                    .replace(/<\/hl-pink>/g, '</span>')
                    .replace(/<hl-green>/g, '<span class="highlight-green">')
                    .replace(/<\/hl-green>/g, '</span>')
                    .replace(/【必考】/g, '<span class="keypoint-tag">必考</span>');
            }
        });
    });

    return notesData;
}

const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        switchView(view);
    });
});

function switchView(viewName) {
    state.currentView = viewName;
    
    navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    
    views.forEach(view => {
        view.classList.remove('active');
    });
    
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    if (viewName === 'notes' && state.notes) {
        updateProgressRing();
    }
}

const courseNameInput = document.getElementById('courseName');
const teacherNameInput = document.getElementById('teacherName');
const lectureDateInput = document.getElementById('lectureDate');
const courseTag = document.getElementById('courseTag');

const today = new Date().toISOString().split('T')[0];
lectureDateInput.value = today;

function updateCourseTag() {
    const name = courseNameInput.value.trim() || '未命名课程';
    courseTag.textContent = name;
}

courseNameInput.addEventListener('input', updateCourseTag);
updateCourseTag();

const modeCards = document.querySelectorAll('.mode-card');
const textInputArea = document.getElementById('textInputArea');
const audioInputArea = document.getElementById('audioInputArea');

modeCards.forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        
        modeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        if (mode === 'text') {
            textInputArea.style.display = '';
            audioInputArea.style.display = 'none';
        } else if (mode === 'audio') {
            textInputArea.style.display = 'none';
            audioInputArea.style.display = '';
        }
    });
});

const lectureText = document.getElementById('lectureText');
const charCount = document.getElementById('charCount');
const sampleBtn = document.getElementById('sampleBtn');

function updateCharCount() {
    const count = lectureText.value.trim().length;
    charCount.textContent = `${count} 字`;
}

lectureText.addEventListener('input', updateCharCount);

sampleBtn.addEventListener('click', () => {
    lectureText.value = SAMPLE_TEXT;
    updateCharCount();
    
    lectureText.style.transform = 'scale(0.98)';
    setTimeout(() => {
        lectureText.style.transform = 'scale(1)';
    }, 150);
});

const audioDropZone = document.getElementById('audioDropZone');
const audioFileInput = document.getElementById('audioFileInput');
const audioPreview = document.getElementById('audioPreview');
const previewFilename = document.getElementById('previewFilename');
const removeAudioBtn = document.getElementById('removeAudioBtn');
const audioProgress = document.getElementById('audioProgress');
const audioProgressText = document.getElementById('audioProgressText');
const transcribeBtn = document.getElementById('transcribeBtn');
const sampleAudioBtn = document.getElementById('sampleAudioBtn');

let currentAudioFile = null;

audioDropZone.addEventListener('click', () => {
    audioFileInput.click();
});

audioFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleAudioFile(file);
    }
});

audioDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    audioDropZone.classList.add('dragover');
});

audioDropZone.addEventListener('dragleave', () => {
    audioDropZone.classList.remove('dragover');
});

audioDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    audioDropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
        handleAudioFile(file);
    }
});

function handleAudioFile(file) {
    currentAudioFile = file;
    previewFilename.textContent = file.name;
    audioPreview.style.display = '';
    audioDropZone.style.display = 'none';
    audioProgress.style.width = '0%';
    audioProgressText.textContent = '准备转写...';
}

removeAudioBtn.addEventListener('click', () => {
    currentAudioFile = null;
    audioFileInput.value = '';
    audioPreview.style.display = 'none';
    audioDropZone.style.display = '';
});

sampleAudioBtn.addEventListener('click', () => {
    const mockFile = { name: '微观经济学_第三章_需求与供给.mp3', type: 'audio/mp3', size: 5242880 };
    handleAudioFile(mockFile);
});

transcribeBtn.addEventListener('click', async () => {
    if (!currentAudioFile) return;
    
    // 判断是否为真实上传的文件（示例录音是普通对象，不是File实例）
    const isRealFile = currentAudioFile instanceof File;
    
    if (!isRealFile) {
        await simulateTranscription();
        return;
    }
    
    try {
        audioProgress.style.width = '10%';
        audioProgressText.textContent = '正在上传音频到MiMo识别...';
        
        const transcript = await transcribeWithMiMo(currentAudioFile);
        
        audioProgress.style.width = '100%';
        audioProgressText.textContent = '转写完成！';
        
        setTimeout(async () => {
            lectureText.value = transcript;
            updateCharCount();
            await showProcessingAndGenerate();
        }, 500);
    } catch (error) {
        console.error('MiMo转写失败:', error);
        const errorMsg = error.message || '未知错误';
        audioProgressText.textContent = `转写失败：${errorMsg.slice(0, 60)}...`;
        setTimeout(async () => {
            lectureText.value = SAMPLE_TEXT;
            updateCharCount();
            await showProcessingAndGenerate();
        }, 2000);
    }
});

async function simulateTranscription() {
    const progressSteps = [
        { percent: 20, text: '正在上传音频...' },
        { percent: 40, text: '正在识别语音...' },
        { percent: 60, text: '正在转写文字...' },
        { percent: 80, text: '正在整理结构...' },
        { percent: 100, text: '转写完成！' }
    ];
    
    let stepIndex = 0;
    
    const interval = setInterval(() => {
        if (stepIndex >= progressSteps.length) {
            clearInterval(interval);
            setTimeout(async () => {
                lectureText.value = SAMPLE_TEXT;
                updateCharCount();
                await showProcessingAndGenerate();
            }, 300);
            return;
        }
        
        audioProgress.style.width = `${progressSteps[stepIndex].percent}%`;
        audioProgressText.textContent = progressSteps[stepIndex].text;
        stepIndex++;
    }, 600);
}

const generateBtn = document.getElementById('generateBtn');
const processingOverlay = document.getElementById('processingOverlay');
const stepItems = document.querySelectorAll('.step-item');

generateBtn.addEventListener('click', async () => {
    const text = lectureText.value.trim();
    
    if (text.length < 20) {
        lectureText.style.borderColor = 'var(--accent-ochre)';
        lectureText.focus();
        setTimeout(() => {
            lectureText.style.borderColor = '';
        }, 2000);
        return;
    }
    
    await showProcessingAndGenerate();
});

async function showProcessingAndGenerate() {
    processingOverlay.classList.add('active');
    
    stepItems.forEach((step, index) => {
        step.classList.remove('active', 'done');
        
        setTimeout(() => {
            step.classList.add('active');
            
            if (index > 0) {
                stepItems[index - 1].classList.remove('active');
                stepItems[index - 1].classList.add('done');
            }
        }, index * 600);
    });
    
    const result = await generateNotes();
    
    setTimeout(() => {
        stepItems[stepItems.length - 1].classList.remove('active');
        stepItems[stepItems.length - 1].classList.add('done');
        
        setTimeout(() => {
            processingOverlay.classList.remove('active');
            switchView('notes');
            
            stepItems.forEach((step, index) => {
                step.classList.remove('active', 'done');
                if (index === 0) step.classList.add('active');
            });
        }, 400);
    }, Math.max(600 * stepItems.length + 200 - Date.now() + (result?.startTime || Date.now()), 500));
}

async function generateNotes() {
    const startTime = Date.now();
    const courseName = courseNameInput.value.trim();
    const teacherName = teacherNameInput.value.trim();
    const lectureDate = lectureDateInput.value;
    const text = lectureText.value.trim();
    
    document.getElementById('notesCourse').textContent = courseName || '未命名课程';
    document.getElementById('notesTeacher').textContent = teacherName || '未知教师';
    document.getElementById('notesDate').textContent = formatDate(lectureDate);
    
    try {
        const notesData = await callDeepSeek(text, courseName, teacherName);
        state.notes = notesData;
    } catch (error) {
        console.warn('AI生成失败，使用示例数据:', error);
        state.notes = JSON.parse(JSON.stringify(SAMPLE_NOTES));
    }
    
    renderNotes();
    renderTOC();
    renderKnowledgeGraph();
    updateStats();
    updateFlashcards();
    
    return { startTime };
}

function formatDate(dateStr) {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function renderNotes() {
    const notesBody = document.getElementById('notesBody');
    
    if (!state.notes) {
        notesBody.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">✎</div>
                <p class="empty-text">还没有笔记内容</p>
                <p class="empty-hint">去「录入」页面，输入课堂内容生成结构化笔记</p>
                <button class="outline-btn" id="goHomeBtn">去录入</button>
            </div>
        `;
        document.getElementById('goHomeBtn').addEventListener('click', () => switchView('home'));
        return;
    }
    
    let html = '';
    
    state.notes.sections.forEach((section) => {
        html += `<div class="note-section" id="${section.id}">`;
        html += `
            <div class="section-heading">
                <span class="section-heading-num">${section.num}</span>
                <h2 class="section-heading-title">${section.title}</h2>
            </div>
        `;
        
        section.content.forEach(item => {
            if (item.type === 'paragraph') {
                html += `<p class="note-paragraph">${item.text}</p>`;
            } else if (item.type === 'callout') {
                html += `
                    <div class="note-callout">
                        <div class="callout-label">${item.label}</div>
                        <div class="callout-text">${item.text}</div>
                    </div>
                `;
            } else if (item.type === 'list') {
                html += '<div class="note-list">';
                item.items.forEach((listItem, index) => {
                    html += `
                        <div class="note-list-item">
                            <span class="list-marker">${index + 1}</span>
                            <div class="list-content">
                                <div class="list-title">${listItem.title}</div>
                                <div class="list-desc">${listItem.desc}</div>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            }
        });
        
        html += '</div>';
    });
    
    notesBody.innerHTML = html;
    
    document.querySelectorAll('.note-section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
    
    setupSectionObserver();
    setupReadingProgress();
}

function renderTOC() {
    const tocList = document.getElementById('tocList');
    
    if (!state.notes) {
        tocList.innerHTML = '';
        document.getElementById('sectionCount').textContent = '0 节';
        return;
    }
    
    let html = '';
    state.notes.sections.forEach((section, index) => {
        html += `
            <div class="toc-item ${index === 0 ? 'active' : ''}" data-section="${section.id}">
                <span class="toc-num">${section.num}</span>
                <span class="toc-title">${section.title}</span>
            </div>
        `;
    });
    
    tocList.innerHTML = html;
    document.getElementById('sectionCount').textContent = `${state.notes.sections.length} 节`;
    
    document.querySelectorAll('.toc-item').forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;
            const sectionEl = document.getElementById(sectionId);
            if (sectionEl) {
                sectionEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupSectionObserver() {
    const sections = document.querySelectorAll('.note-section');
    const tocItems = document.querySelectorAll('.toc-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                tocItems.forEach(item => {
                    item.classList.toggle('active', item.dataset.section === id);
                });
            }
        });
    }, { rootMargin: '-100px 0px -70% 0px' });
    
    sections.forEach(section => observer.observe(section));
}

function setupReadingProgress() {
    const notesContent = document.querySelector('.notes-content');
    const progressFill = document.getElementById('readingProgress');
    const progressText = document.getElementById('progressText');
    
    if (!notesContent) return;
    
    notesContent.addEventListener('scroll', () => {
        const scrollTop = notesContent.scrollTop;
        const scrollHeight = notesContent.scrollHeight - notesContent.clientHeight;
        const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
    });
}

function renderKnowledgeGraph() {
    const knowledgeTags = document.getElementById('knowledgeTags');
    const knowledgeGraph = document.getElementById('knowledgeGraph');
    const knowledgeCount = document.getElementById('knowledgeCount');
    
    if (!state.notes || !state.notes.knowledge) {
        knowledgeTags.innerHTML = '';
        knowledgeGraph.innerHTML = `<svg viewBox="0 0 240 200" class="graph-svg"></svg>`;
        knowledgeCount.textContent = '0 个知识点';
        return;
    }
    
    const tags = state.notes.knowledge.tags;
    const graph = state.notes.knowledge.graph;
    
    knowledgeCount.textContent = `${tags.length} 个知识点`;
    
    let tagsHtml = '';
    tags.forEach(tag => {
        tagsHtml += `<span class="knowledge-tag">${tag}</span>`;
    });
    knowledgeTags.innerHTML = tagsHtml;
    
    const tagPositions = {
        '需求': { x: 60, y: 40 },
        '需求定理': { x: 120, y: 20 },
        '替代效应': { x: 180, y: 50 },
        '收入效应': { x: 180, y: 90 },
        '供给': { x: 60, y: 160 },
        '供给定理': { x: 120, y: 180 },
        '市场均衡': { x: 120, y: 100 },
        '均衡价格': { x: 60, y: 100 }
    };
    
    let graphHtml = `<svg viewBox="0 0 240 200" class="graph-svg">
        <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>`;
    
    graph.forEach(edge => {
        const source = tagPositions[edge.source];
        const target = tagPositions[edge.target];
        if (source && target) {
            graphHtml += `<line x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" 
                stroke="#C8D5B9" stroke-width="1.5" stroke-dasharray="4,2"/>`;
        }
    });
    
    tags.forEach(tag => {
        const pos = tagPositions[tag] || { x: 120, y: 100 };
        const isCore = ['市场均衡', '需求定理', '供给定理'].includes(tag);
        graphHtml += `
            <g class="graph-node" data-tag="${tag}" style="cursor: pointer;">
                <circle cx="${pos.x}" cy="${pos.y}" r="${isCore ? 18 : 14}" 
                    fill="${isCore ? '#3D5A45' : '#FFFFFF'}" 
                    stroke="${isCore ? '#3D5A45' : '#C8D5B9'}" 
                    stroke-width="2"
                    filter="url(#glow)"/>
                <text x="${pos.x}" y="${pos.y + 5}" text-anchor="middle" 
                    font-size="${isCore ? 11 : 10}" fill="${isCore ? '#FFFFFF' : '#5C6B5E'}" 
                    font-weight="${isCore ? 600 : 400}">${tag}</text>
            </g>
        `;
    });
    
    graphHtml += '</svg>';
    knowledgeGraph.innerHTML = graphHtml;
    
    document.querySelectorAll('.graph-node').forEach(node => {
        node.addEventListener('click', () => {
            const tag = node.dataset.tag;
            const elements = document.querySelectorAll('.note-paragraph, .callout-text, .list-title, .list-desc');
            elements.forEach(el => {
                if (el.textContent.includes(tag)) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.classList.add('highlight-flash');
                    setTimeout(() => el.classList.remove('highlight-flash'), 1000);
                }
            });
        });
    });
    
    document.querySelectorAll('.knowledge-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const tagText = tag.textContent;
            const elements = document.querySelectorAll('.note-paragraph, .callout-text, .list-title, .list-desc');
            elements.forEach(el => {
                if (el.textContent.includes(tagText)) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.classList.add('highlight-flash');
                    setTimeout(() => el.classList.remove('highlight-flash'), 1000);
                }
            });
        });
    });
}

function updateStats() {
    if (!state.notes) return;
    
    document.getElementById('highlightsCount').textContent = state.notes.stats.highlights;
    document.getElementById('keypointsCount').textContent = state.notes.stats.keypoints;
}

const toFlashcardsBtn = document.getElementById('toFlashcardsBtn');
const goHomeBtn = document.getElementById('goHomeBtn');
const goNotesBtn = document.getElementById('goNotesBtn');

toFlashcardsBtn.addEventListener('click', () => {
    if (state.notes) {
        switchView('flashcards');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'goHomeBtn') {
        switchView('home');
    }
    if (e.target.id === 'goNotesBtn') {
        switchView('notes');
    }
});

const flashcard = document.getElementById('flashcard');
const cardQuestion = document.getElementById('cardQuestion');
const cardAnswer = document.getElementById('cardAnswer');
const cardNum = document.getElementById('cardNum');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const markKnown = document.getElementById('markKnown');
const markUnknown = document.getElementById('markUnknown');
const shuffleBtn = document.getElementById('shuffleBtn');
const cardStack = document.getElementById('cardStack');
const flashcardsEmpty = document.getElementById('flashcardsEmpty');

flashcard.addEventListener('click', () => {
    state.cardFlipped = !state.cardFlipped;
    flashcard.classList.toggle('flipped', state.cardFlipped);
});

function updateFlashcards() {
    if (!state.notes || !state.notes.flashcards || state.notes.flashcards.length === 0) {
        flashcardsEmpty.style.display = '';
        cardStack.style.display = 'none';
        return;
    }
    
    flashcardsEmpty.style.display = 'none';
    cardStack.style.display = 'flex';
    
    state.currentCardIndex = 0;
    state.cardFlipped = false;
    state.studiedCards = new Set();
    
    showCard(0);
    updateProgressRing();
}

function showCard(index) {
    if (!state.notes || !state.notes.flashcards) return;
    
    const cards = state.notes.flashcards;
    const card = cards[index];
    
    state.cardFlipped = false;
    flashcard.classList.remove('flipped');
    
    cardWrapper = document.getElementById('cardWrapper');
    cardWrapper.style.opacity = '0';
    cardWrapper.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        cardQuestion.textContent = card.question;
        cardAnswer.textContent = card.answer;
        cardNum.textContent = `${index + 1} / ${cards.length}`;
        
        cardWrapper.style.opacity = '1';
        cardWrapper.style.transform = 'translateY(0)';
    }, 150);
    
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === cards.length - 1;
    
    updateProgressRing();
}

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.currentCardIndex > 0) {
        state.currentCardIndex--;
        showCard(state.currentCardIndex);
    }
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.notes && state.currentCardIndex < state.notes.flashcards.length - 1) {
        state.currentCardIndex++;
        showCard(state.currentCardIndex);
    }
});

markKnown.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!state.notes) return;
    
    state.studiedCards.add(state.currentCardIndex);
    
    flashcard.style.transform = 'translateX(30px) rotate(2deg)';
    flashcard.style.opacity = '0';
    
    setTimeout(() => {
        flashcard.style.transform = '';
        flashcard.style.opacity = '';
        
        if (state.currentCardIndex < state.notes.flashcards.length - 1) {
            state.currentCardIndex++;
            showCard(state.currentCardIndex);
        } else {
            updateProgressRing();
        }
    }, 300);
});

markUnknown.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!state.notes) return;
    
    flashcard.style.transform = 'translateX(-30px) rotate(-2deg)';
    flashcard.style.opacity = '0';
    
    setTimeout(() => {
        flashcard.style.transform = '';
        flashcard.style.opacity = '';
        
        if (state.currentCardIndex < state.notes.flashcards.length - 1) {
            state.currentCardIndex++;
            showCard(state.currentCardIndex);
        }
    }, 300);
});

shuffleBtn.addEventListener('click', () => {
    if (!state.notes || !state.notes.flashcards) return;
    
    const cards = state.notes.flashcards;
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    state.currentCardIndex = 0;
    state.studiedCards = new Set();
    showCard(0);
});

document.addEventListener('keydown', (e) => {
    if (state.currentView !== 'flashcards') return;
    
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (state.currentCardIndex > 0) {
            state.currentCardIndex--;
            showCard(state.currentCardIndex);
        }
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (state.notes && state.currentCardIndex < state.notes.flashcards.length - 1) {
            state.currentCardIndex++;
            showCard(state.currentCardIndex);
        }
    } else if (e.key === ' ') {
        e.preventDefault();
        state.cardFlipped = !state.cardFlipped;
        flashcard.classList.toggle('flipped', state.cardFlipped);
    }
});

function updateProgressRing() {
    const fill = document.getElementById('progressFill');
    const progressNum = document.getElementById('progressNum');
    const totalCards = document.getElementById('totalCards');
    
    if (!state.notes || !state.notes.flashcards) {
        fill.style.strokeDashoffset = '263.89';
        progressNum.textContent = '0';
        totalCards.textContent = '0';
        return;
    }
    
    const total = state.notes.flashcards.length;
    const studied = state.studiedCards.size;
    const progress = total > 0 ? studied / total : 0;
    const circumference = 2 * Math.PI * 42;
    
    fill.style.strokeDashoffset = circumference * (1 - progress);
    progressNum.textContent = studied;
    totalCards.textContent = total;
}

const exportBtn = document.getElementById('exportBtn');

exportBtn.addEventListener('click', () => {
    if (!state.notes) return;
    
    let text = '';
    text += `${state.notes.title}\n`;
    text += '='.repeat(40) + '\n\n';
    
    state.notes.sections.forEach(section => {
        text += `【${section.num}】${section.title}\n`;
        text += '-'.repeat(30) + '\n';
        
        section.content.forEach(item => {
            if (item.type === 'paragraph') {
                const plainText = item.text.replace(/<[^>]+>/g, '');
                text += plainText + '\n';
            } else if (item.type === 'callout') {
                text += `\n▶ ${item.label}\n`;
                const plainText = item.text.replace(/<[^>]+>/g, '');
                text += plainText + '\n';
            } else if (item.type === 'list') {
                item.items.forEach((listItem, index) => {
                    text += `  ${index + 1}. ${listItem.title}\n`;
                    text += `     ${listItem.desc}\n`;
                });
            }
        });
        
        text += '\n\n';
    });
    
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.notes.title}_笔记.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.addEventListener('keydown', (e) => {
    if (state.currentView !== 'flashcards') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        state.cardFlipped = !state.cardFlipped;
        flashcard.classList.toggle('flipped', state.cardFlipped);
    } else if (e.key === 'ArrowLeft') {
        if (state.currentCardIndex > 0) {
            state.currentCardIndex--;
            showCard(state.currentCardIndex);
        }
    } else if (e.key === 'ArrowRight') {
        if (state.notes && state.currentCardIndex < state.notes.flashcards.length - 1) {
            state.currentCardIndex++;
            showCard(state.currentCardIndex);
        }
    }
});

updateCharCount();

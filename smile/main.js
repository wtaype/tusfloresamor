import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { adrm, adtm, infoo, adup, showLoading,
  savels, getls, removels
} from './widev.js';

// ===========================
// 🎨 CONFIGURACIÓN DE FESTIVIDADES - WEELUKI
// ===========================
const FESTIVIDADES = {
  Girasol: {
    nombre: 'Flores Amarillas bb',
    fecha: '21 de Septiembre',
    subtitle: 'Día de la Primavera y la Juventud',
    emoji: '🌻',
    theme: 'Girasol',
    mensaje: 'En este día especial, quiero que sepas que eres la luz que ilumina mi vida como el amarillo de estas flores.',
    btnText: '❤️ ¡Gracias por este hermoso mensaje!',
    audio: 'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    greeting: 'te he preparado estas flores amarillas especiales'
  },
  cumple: {
    nombre: 'Feliz Cumpleaños',
    fecha: 'Tu Día Especial',
    subtitle: 'Celebrando tu existencia',
    emoji: '🎂',
    theme: 'cumple',
    mensaje: 'Hoy celebramos que llegaste a este mundo para llenarlo de alegría. ¡Que todos tus deseos se hagan realidad!',
    btnText: '🎉 ¡Muchas gracias por felicitarme!',
    audio: 'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    greeting: 'quiero desearte un cumpleaños lleno de alegría'
  },
  padre: {
    nombre: 'Día del Padre',
    fecha: 'Tercer Domingo de Junio',
    subtitle: 'Un héroe en mi vida',
    emoji: '👨‍👧‍👦',
    theme: 'padre',
    mensaje: 'Gracias por ser mi ejemplo, mi guía y mi héroe. Tu amor y sabiduría han moldeado quien soy hoy.',
    btnText: '👔 ¡Gracias por este mensaje tan especial!',
    audio: 'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    greeting: 'quiero honrarte en este día tan especial'
  },
  madre: {
    nombre: 'Día de la Madre',
    fecha: 'Segundo Domingo de Mayo',
    subtitle: 'Amor incondicional',
    emoji: '👩‍👧‍👦',
    theme: 'madre',
    mensaje: 'Eres la luz que guía mi camino, el amor que me fortalece y el corazón más puro que conozco. Te amo, mamá.',
    btnText: '🌸 ¡Te amo muchísimo también!',
    audio: 'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    greeting: 'quiero dedicarte estas palabras llenas de amor'
  },
  navidad: {
    nombre: 'Feliz Navidad',
    fecha: '25 de Diciembre',
    subtitle: 'Amor, paz y familia',
    emoji: '🎄',
    theme: 'navidad',
    mensaje: 'En esta Navidad, mi regalo más preciado eres tú. Que la magia navideña llene nuestros corazones de amor y alegría.',
    btnText: '🎁 ¡Feliz Navidad para ti también!',
    audio: 'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    greeting: 'quiero compartir contigo la magia navideña'
  },
  anio: {
    nombre: 'Feliz Año Nuevo',
    fecha: '1 de Enero',
    subtitle: 'Nuevos comienzos, nuevas aventuras',
    emoji: '🎊',
    theme: 'anio',
    mensaje: 'Que este nuevo año traiga infinitas bendiciones, sueños cumplidos y momentos inolvidables a tu lado.',
    btnText: '🥳 ¡Feliz Año Nuevo para ti también!',
    audio: 'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    greeting: 'quiero recibir el nuevo año a tu lado'
  }
};

// ===========================
// 🎵 VARIABLES GLOBALES
// ===========================
let currentFestival = null;
let audioInstance = null;
let isPlaying = false;
let currentTimeout = null;

// ===========================
// 🚀 INICIALIZACIÓN DE WEELUKI
// ===========================
$(() => {
  console.log('🎉 Weeluki - Festividades Especiales Iniciado');
  
  // Verificar si hay parámetros en URL para vista compartida
  checkUrlParams();
  
  // Configurar event listeners
  setupEventListeners();
  
  // Animar entrada de elementos
  setTimeout(() => {
    animateEntrance();
  }, 300);
  
  // Configurar tema inicial
});

// ===========================
// 🔗 VERIFICAR PARÁMETROS URL PARA VISTA COMPARTIDA
// ===========================
function checkUrlParams() {
  const params = new URLSearchParams(location.search);
  const festival = params.get('festival');
  const para = params.get('para');
  const de = params.get('de');
  const mensaje = params.get('mensaje');
  
  if (festival && FESTIVIDADES[festival]) {
    // Mostrar vista compartida directamente
    showSharedView(festival, para, de, mensaje);
  }
}

// ===========================
// 📱 MOSTRAR VISTA COMPARTIDA
// ===========================
function showSharedView(festival, para, de, mensaje) {
  const config = FESTIVIDADES[festival];
  
  // Cambiar tema
  
  // Crear estructura de vista compartida
  $('body').html(`
    <div class="shared-view">
      <div class="shared-card">
        <div class="shared-main-icon">${config.emoji}</div>
        
        <div class="shared-greeting">
          ¡Hola <strong>${para || 'Amor'}</strong>!
        </div>
        
        <div class="shared-message">
          ${mensaje || config.mensaje}
        </div>
        
        <div class="shared-signature">
          Con todo mi cariño,<br>
          <strong>${de || 'Alguien especial'}</strong>
        </div>
        
        <div class="shared-footer">
          <button class="btn-preview" onclick="playSharedAudio()">
            ${config.btnText}
          </button>
          <br><br>
          <a href="${window.location.origin}${window.location.pathname}" class="btn-create-own">
            <i class="fas fa-plus"></i>
            Crear mi propio mensaje en Weeluki
          </a>
        </div>
      </div>
    </div>
  `);
  
  // Auto-reproducir música después de 2 segundos
  setTimeout(() => {
    playSharedAudio();
  }, 2000);
  
  // Crear pétalos flotantes
  createFloatingElements();
}

// ===========================
// 🎨 ABRIR MODAL EDITOR
// ===========================
function openEditor(festival) {
  if (!FESTIVIDADES[festival]) return;
  
  currentFestival = festival;
  const config = FESTIVIDADES[festival];
  
  // Cambiar tema
  
  // Actualizar contenido del modal
  $('.modal-icon i').removeClass().addClass('fas fa-edit');
  $('.modal-title').text(`Personalizar ${config.nombre}`);
  $('.modal-subtitle').text('Crea una experiencia única y especial');
  
  // Cargar valores guardados o predeterminados
  const saved = getls(`weeluki_${festival}`) || {};
  
  $('input[placeholder*="María"]').val(saved.para || 'María');
  $('input[placeholder*="Juan"]').val(saved.de || 'Juan');
  $('textarea').val(saved.mensaje || config.mensaje);
  
  // Actualizar vista previa
  updatePreview();
  
  // Generar link
  generateLink();
  
  // Configurar audio
  setupAudio(config.audio);
  
  // Mostrar modal con animación
  $('#modalEditor').addClass('active');
  
  // Trigger de evento personalizado
  $(document).trigger('modalOpened', [festival]);
  
  // Mostrar notificación
  showNotification(`¡Editor de ${config.nombre} abierto!`, 'success');
}

// ===========================
// ❌ CERRAR MODAL EDITOR
// ===========================
function closeEditor() {
  $('#modalEditor').addClass('closing');
  
  // Detener audio si está reproduciéndose
  if (audioInstance) {
    audioInstance.pause();
    audioInstance.currentTime = 0;
    isPlaying = false;
    updateAudioButton();
  }
  
  setTimeout(() => {
    $('#modalEditor').removeClass('active closing');
    
    // Restaurar tema original
    
    currentFestival = null;
  }, 400);
}

// ===========================
// 🔄 ACTUALIZAR VISTA PREVIA EN TIEMPO REAL
// ===========================
function updatePreview() {
  if (!currentFestival) return;    
  
  const config = FESTIVIDADES[currentFestival];
  const para = $('input[placeholder*="María"]').val() || 'María';
  const de = $('input[placeholder*="Juan"]').val() || 'Juan';
  const mensaje = $('textarea').val() || config.mensaje;
  
  // Actualizar elementos de preview
  $('.preview-date').text(config.fecha);
  $('.preview-emoji, .preview-main-icon').text(config.emoji);
  $('.preview-name').text(config.nombre);
  $('.greeting-name').text(para);
  $('.preview-message').text(mensaje);
  $('.signature-name').text(de);
  $('.preview-btn').html(`<i class="fas fa-heart"></i> ${config.btnText}`);
  
  // Actualizar contador de caracteres
  updateCharacterCounter(mensaje);
  
  // Generar link automáticamente
  generateLink();
  
  // Guardar en tiempo real
  saveData();
}

// ===========================
// 📝 ACTUALIZAR CONTADOR DE CARACTERES
// ===========================
function updateCharacterCounter(text) {
  const count = text.length;
  const max = 500;
  $('.character-counter').text(`${count}/${max} caracteres`);
  
  if (count > max * 0.9) {
    $('.character-counter').addClass('warning');
  } else {
    $('.character-counter').removeClass('warning');
  }
}

// ===========================
// 🔗 GENERAR LINK PERSONALIZADO
// ===========================
function generateLink() {
  if (!currentFestival) return;
  
  const para = $('input[placeholder*="María"]').val() || 'María';
  const de = $('input[placeholder*="Juan"]').val() || 'Juan';
  const mensaje = $('textarea').val();
  
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams({
    festival: currentFestival,
    para: para,
    de: de
  });
  
  // Solo agregar mensaje si es diferente al predeterminado
  if (mensaje && mensaje !== FESTIVIDADES[currentFestival].mensaje) {
    params.set('mensaje', mensaje);
  }
  
  const fullUrl = `${baseUrl}?${params.toString()}`;
  $('.link-input').val(fullUrl);
}

// ===========================
// 📋 COPIAR LINK AL PORTAPAPELES
// ===========================
async function copyLink() {
  const link = $('.link-input').val();
  
  try {
    await navigator.clipboard.writeText(link);
    showNotification('¡Link copiado al portapapeles!', 'success');
    
    // Animación del botón
    $('.btn-copy').addClass('copied');
    $('.btn-copy i').removeClass('fa-copy').addClass('fa-check');
    
    setTimeout(() => {
      $('.btn-copy').removeClass('copied');
      $('.btn-copy i').removeClass('fa-check').addClass('fa-copy');
    }, 2000);
    
  } catch (err) {
    // Fallback para navegadores que no soportan clipboard API
    const input = document.querySelector('.link-input');
    input.select();
    document.execCommand('copy');
    showNotification('¡Link copiado!', 'success');
  }
}

// ===========================
// 👀 ABRIR VISTA PREVIA
// ===========================
function openPreview() {
  const link = $('.link-input').val();
  window.open(link, '_blank');
}

// ===========================
// 💾 GUARDAR DATOS
// ===========================
function saveData() {
  if (!currentFestival) return;
  
  const data = {
    para: $('input[placeholder*="María"]').val(),
    de: $('input[placeholder*="Juan"]').val(),
    mensaje: $('textarea').val(),
    timestamp: Date.now()
  };
  
  // Guardar en localStorage por 30 días
  savels(`weeluki_${currentFestival}`, data, 30 * 24 * 60); // 30 días en minutos
}

// ===========================
// 🎵 CONFIGURAR AUDIO
// ===========================
function setupAudio(audioUrl) {
  // Crear elemento de audio si no existe
  if (!audioInstance) {
    audioInstance = new Audio(audioUrl);
    audioInstance.loop = true;
    audioInstance.volume = 0.6;
    
    // Event listeners del audio
    audioInstance.addEventListener('play', () => {
      isPlaying = true;
      updateAudioButton();
    });
    
    audioInstance.addEventListener('pause', () => {
      isPlaying = false;
      updateAudioButton();
    });
  } else {
    audioInstance.src = audioUrl;
  }
}

// ===========================
// 🎵 TOGGLE AUDIO
// ===========================
function toggleAudio() {
  if (!audioInstance) return;
  
  if (!isPlaying) {
    audioInstance.play().then(() => {
      showNotification('🎵 Música reproduciendo', 'info');
    }).catch(err => {
      console.error('Error reproduciendo audio:', err);
      showNotification('Error al reproducir música', 'error');
    });
  } else {
    audioInstance.pause();
  }
}

// ===========================
// 🔄 ACTUALIZAR BOTÓN DE AUDIO
// ===========================
function updateAudioButton() {
  const btn = $('.btn-audio');
  const icon = btn.find('.audio-icon i');
  const title = btn.find('.audio-title');
  const subtitle = btn.find('.audio-subtitle');
  
  if (isPlaying) {
    title.text('Pausar música');
    subtitle.text('Reproduciendo...');
    icon.removeClass('fa-play').addClass('fa-pause');
    btn.addClass('playing');
    
    // Activar animación de barras
    $('.wave-bar').css('animation-play-state', 'running');
  } else {
    title.text('Melodía Romántica');
    subtitle.text('Perfecta para tu mensaje');
    icon.removeClass('fa-pause').addClass('fa-play');
    btn.removeClass('playing');
    
    // Pausar animación de barras
    $('.wave-bar').css('animation-play-state', 'paused');
  }
}

// ===========================
// 🎵 AUDIO PARA VISTA COMPARTIDA
// ===========================
window.playSharedAudio = function() {
  const audio = new Audio('https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3');
  audio.loop = true;
  audio.volume = 0.5;
  audio.play().catch(err => {
    console.log('Audio bloqueado por el navegador');
  });
};

// ===========================
// 🔔 SISTEMA DE NOTIFICACIONES
// ===========================
function showNotification(message, type = 'info', duration = 4000) {
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-times-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };
  
  const titles = {
    success: '¡Éxito!',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información'
  };
  
  const notification = $(`
    <div class="notification">
      <div class="notification-icon">
        <i class="fas ${icons[type]}"></i>
      </div>
      <div class="notification-content">
        <div class="notification-title">${titles[type]}</div>
        <div class="notification-message">${message}</div>
      </div>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `);
  
  $('#notificationContainer').append(notification);
  
  // Mostrar con animación
  setTimeout(() => notification.addClass('show'), 100);
  
  // Auto-remover
  const timeout = setTimeout(() => {
    removeNotification(notification);
  }, duration);
  
  // Click para cerrar
  notification.find('.notification-close').on('click', () => {
    clearTimeout(timeout);
    removeNotification(notification);
  });
}

function removeNotification(notification) {
  notification.removeClass('show');
  setTimeout(() => notification.remove(), 300);
}

// ===========================
// 💾 GUARDAR Y COMPARTIR
// ===========================
function saveAndShare() {
  if (!currentFestival) return;
  
  // Mostrar loading
  showLoading(true);
  
  // Simular proceso de guardado
  setTimeout(() => {
    saveData();
    showLoading(false);
    showNotification('¡Mensaje guardado y listo para compartir!', 'success');
    
    // Efecto visual en el botón
    $('.btn-save').addClass('saved');
    setTimeout(() => $('.btn-save').removeClass('saved'), 2000);
    
    // Auto-copiar link
    setTimeout(copyLink, 500);
    
  }, 2000);
}

// ===========================
// ✨ CREAR ELEMENTOS FLOTANTES
// ===========================
function createFloatingElements() {
  const container = $('<div id="floatingElements" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>');
  $('body').append(container);
  
  const emojis = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🌼', '🏵️', '💛', '❤️', '💕', '✨'];
  
  function createFloatingElement() {
    const element = $(`
      <div style="
        position: absolute;
        font-size: ${Math.random() * 20 + 15}px;
        left: ${Math.random() * 100}%;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        opacity: ${Math.random() * 0.7 + 0.3};
      ">
        ${emojis[Math.floor(Math.random() * emojis.length)]}
      </div>
    `);
    
    container.append(element);
    
    // Remover después de la animación
    setTimeout(() => element.remove(), 20000);
  }
  
  // Crear elementos periódicamente
  setInterval(createFloatingElement, 3000);
  
  // Crear algunos iniciales
  for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingElement, i * 1000);
  }
}

// ===========================
// ✨ ANIMACIONES DE ENTRADA
// ===========================
function animateEntrance() {
  // Animar header
  $('.main-header').addClass('animate-fade-in');
  
  // Animar cards con delay escalonado
  $('.festividad-card').each((index, card) => {
    setTimeout(() => {
      $(card).addClass('animate-slide-up');
    }, index * 150);
  });
  
  // Animar sección welcome
  setTimeout(() => {
    $('.welcome-message').addClass('animate-fade-in');
  }, 800);
}

// ===========================
// 📱 EVENT LISTENERS
// ===========================
function setupEventListeners() {
  // Click en cards de festividades
  $(document).on('click', '.btn-personalizar', function() {
    const card = $(this).closest('.festividad-card');
    const festival = card.data('festividad');
    openEditor(festival);
  });
  
  // Botón cerrar modal
  $(document).on('click', '#btnCloseModal, .btn-close', closeEditor);
  
  // Click fuera del modal para cerrar
  $(document).on('click', '.modal-overlay', function(e) {
    if (e.target === this) {
      closeEditor();
    }
  });
  
  // Tecla Escape para cerrar
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && $('.modal-overlay').hasClass('active')) {
      closeEditor();
    }
  });
  
  // Actualizar preview en tiempo real
  $(document).on('input', 'input[placeholder*="María"], input[placeholder*="Juan"], textarea', updatePreview);
  
  // Botones de acción
  $(document).on('click', '.btn-copy', copyLink);
  $(document).on('click', '.btn-preview', openPreview);
  $(document).on('click', '.btn-audio', toggleAudio);
  $(document).on('click', '.btn-save', saveAndShare);
  
  // Botón CTA principal
  $(document).on('click', '.welcome-button .btn', function() {
    $('html, body').animate({
      scrollTop: $('.festividades-section').offset().top - 100
    }, 800);
  });
  
  // Auto-guardar cada 10 segundos mientras esté abierto el editor
  setInterval(() => {
    if (currentFestival && $('.modal-overlay').hasClass('active')) {
      saveData();
    }
  }, 10000);
}

// ===========================
// 🎨 EFECTOS ADICIONALES
// ===========================
// Parallax sutil en scroll
$(window).on('scroll', function() {
  const scrolled = $(this).scrollTop();
  const rate = scrolled * -0.3;
  $('.main-header').css('transform', `translateY(${rate}px)`);
});

// Hover effects para las cards
$(document).on('mouseenter', '.festividad-card', function() {
  $(this).addClass('animate-scale-in');
}).on('mouseleave', '.festividad-card', function() {
  $(this).removeClass('animate-scale-in');
});

// CSS para animaciones flotantes
$('<style>').text(`
  @keyframes float {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
  
  .character-counter.warning {
    color: var(--primary) !important;
    font-weight: 600;
  }
`).appendTo('head');

console.log('🎉 Weeluki v2.0 - Sistema completo cargado exitosamente');

// Exportar funciones globales para usar en HTML
window.openEditor = openEditor;
window.closeEditor = closeEditor;
window.copyLink = copyLink;
window.openPreview = openPreview;
window.toggleAudio = toggleAudio;
window.saveAndShare = saveAndShare;
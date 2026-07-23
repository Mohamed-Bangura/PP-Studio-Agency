/* ===================================
   PP STUDIO AGENCY - CONTACT.JS
   Phase 7: Web3Forms Integration
   =================================== */

// ===== WEB3FORMS CONFIGURATION =====
const WEB3FORMS_ACCESS_KEY = 'efd6d421-3b96-478e-86da-ecdad861b4c5';

// ===== DOM ELEMENTS =====
const contactForm = document.getElementById('contact-form');
const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

// ===== FORM VALIDATION =====

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate form field value
 * @param {string} value - Field value to validate
 * @param {string} type - Type of validation ('required', 'email', 'min-length')
 * @param {number} minLength - Minimum length for min-length validation
 * @returns {string} - Error message or empty string if valid
 */
function validateField(value, type, minLength = 0) {
    if (type === 'required' && !value.trim()) {
        return 'This field is required';
    }
    
    if (type === 'email' && value.trim() && !validateEmail(value)) {
        return 'Please enter a valid email address';
    }
    
    if (type === 'min-length' && value.trim().length < minLength) {
        return `Please enter at least ${minLength} characters`;
    }
    
    return '';
}

/**
 * Display error message for a form field
 * Uses existing .form-error element in the DOM when available
 * @param {HTMLElement} field - Form field element
 * @param {string} message - Error message to display
 */
function showFieldError(field, message) {
    if (!field) return;
    
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    
    formGroup.classList.add('error');
    
    // Use existing .form-error element if available
    const existingError = formGroup.querySelector('.form-error');
    if (existingError) {
        if (message) {
            existingError.textContent = message;
            existingError.style.display = 'block';
        }
        return;
    }
    
    // Fallback: create error element if .form-error doesn't exist
    if (message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        formGroup.appendChild(errorDiv);
    }
}

/**
 * Clear error message for a form field
 * @param {HTMLElement} field - Form field element
 */
function clearFieldError(field) {
    if (!field) return;
    
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    
    formGroup.classList.remove('error');
    
    // Use existing .form-error element
    const errorMessage = formGroup.querySelector('.form-error');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

/**
 * Validate entire contact form
 * @returns {boolean} - True if form is valid, false otherwise
 */
function validateContactForm() {
    let isValid = true;
    
    // Get form fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const serviceField = document.getElementById('service');
    const messageField = document.getElementById('message');
    
    // Validate name
    if (nameField) {
        const nameError = validateField(nameField.value, 'required');
        if (nameError) {
            showFieldError(nameField, nameError);
            isValid = false;
        } else {
            clearFieldError(nameField);
        }
    }
    
    // Validate email
    if (emailField) {
        const emailError = validateField(emailField.value, 'email') || validateField(emailField.value, 'required');
        if (emailError) {
            showFieldError(emailField, emailError);
            isValid = false;
        } else {
            clearFieldError(emailField);
        }
    }
    
    // Validate service
    if (serviceField) {
        const serviceError = validateField(serviceField.value, 'required');
        if (serviceError) {
            showFieldError(serviceField, serviceError);
            isValid = false;
        } else {
            clearFieldError(serviceField);
        }
    }
    
    // Validate message (minimum 10 characters)
    if (messageField) {
        const messageError = validateField(messageField.value, 'required') || validateField(messageField.value, 'min-length', 10);
        if (messageError) {
            showFieldError(messageField, messageError);
            isValid = false;
        } else {
            clearFieldError(messageField);
        }
    }
    
    return isValid;
}

/**
 * Set loading state on submit button
 * @param {boolean} isLoading - Whether the form is submitting
 */
function setLoadingState(isLoading) {
    if (!submitButton) return;
    
    if (isLoading) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        submitButton.classList.add('loading');
    } else {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
        submitButton.classList.remove('loading');
    }
}

/**
 * Handle contact form submission via Web3Forms
 * @param {Event} event - Form submit event
 */
async function handleFormSubmit(event) {
    event.preventDefault();
    
    // Validate form before submission
    if (!validateContactForm()) {
        return;
    }
    
    // Set loading state
    setLoadingState(true);
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        access_key: WEB3FORMS_ACCESS_KEY
    };
    
    try {
        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            // Success message
            alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        } else {
            // Error message
            alert('Something went wrong. Please try again.');
            console.error('Web3Forms submission error:', result);
        }
    } catch (error) {
        // Network or other error
        alert('Something went wrong. Please try again.');
        console.error('Form submission error:', error);
    } finally {
        // Reset loading state
        setLoadingState(false);
    }
}

/**
 * Initialize real-time validation to form fields
 */
function initializeRealTimeValidation() {
    if (!contactForm) return;
    
    const fields = contactForm.querySelectorAll('input, select, textarea');
    
    fields.forEach(field => {
        // Validate on blur (when user leaves the field)
        field.addEventListener('blur', () => {
            validateContactForm();
        });
        
        // Clear error on input
        field.addEventListener('input', () => {
            clearFieldError(field);
        });
    });
}

// ===== INITIALIZATION =====

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
            initializeRealTimeValidation();
        }
        
        console.log('PP Studio Agency Contact Form initialized successfully');
    } catch (error) {
        console.error('Error initializing contact form:', error);
    }
});
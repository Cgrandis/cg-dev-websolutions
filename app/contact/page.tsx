"use client";

import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { IoCheckmarkCircle, IoWarning } from "react-icons/io5";

const FormInput = ({ id, name, type, placeholder, required = true }) => (
  <div>
    <label htmlFor={id} className="sr-only">{placeholder}</label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-black/10 dark:border-white/10 bg-base-200 dark:bg-dark-base-200 px-4 py-3 text-base-content dark:text-dark-base-content placeholder:text-base-content/60 dark:placeholder:text-dark-base-content/60 focus:outline-none focus:ring-2 focus:ring-accent"
    />
  </div>
);

const AutoSizingTextarea = ({ id, name, placeholder, required = true, value, onChange }) => {
  const baseClasses = "resize-none w-full rounded-md border border-black/10 dark:border-white/10 bg-base-200 dark:bg-dark-base-200 px-4 py-3 text-base-content dark:text-dark-base-content placeholder:text-base-content/60 dark:placeholder:text-dark-base-content/60 focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">{placeholder}</label>

      <div
        className="invisible absolute whitespace-pre-wrap break-words overflow-hidden px-4 py-3 w-full"
        style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
        aria-hidden="true"
      >
        {value + '\u00A0'}
      </div>

      <textarea
        id={id}
        name={name}
        rows={4}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={baseClasses}
        style={{ overflow: 'hidden' }}
      />
    </div>
  );
};

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    
    const loadingToast = toast.loading('Sending your message...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      toast.dismiss(loadingToast);

      if (result.success) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white dark:bg-primary-dark shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5 text-green-500">
                  <IoCheckmarkCircle className="h-7 w-7" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-base font-medium text-base-content dark:text-dark-base-content">
                    Message Sent!
                  </p>
                  <p className="mt-1 text-sm text-base-content/80 dark:text-dark-base-content/80">
                    {result.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200 dark:border-white/10">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Close
              </button>
            </div>
          </div>
        ), { duration: 6000 });

        event.target.reset();
        setDescription('');
      } else {
        toast.custom((t) => (
           <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white dark:bg-primary-dark shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5 text-red-500">
                  <IoWarning className="h-7 w-7" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-base font-medium text-base-content dark:text-dark-base-content">
                    An Error Occurred
                  </p>
                  <p className="mt-1 text-sm text-base-content/80 dark:text-dark-base-content/80">
                    {result.message}
                  </p>
                </div>
              </div>
            </div>
             <div className="flex border-l border-gray-200 dark:border-white/10">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Close
              </button>
            </div>
          </div>
        ), { duration: 6000 });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('A network error occurred. Please check your connection.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-base-100 dark:bg-dark-base-100 text-base-content dark:text-dark-base-content">
      <Header />
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            background: 'transparent',
            border: 'none',
            padding: '0',
            boxShadow: 'none',
          },
        }}
      />
      <main className="flex-grow py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text pb-4 sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-base-content/80 dark:text-dark-base-content/80">
              Have a project in mind or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormInput id="name" name="name" type="text" placeholder="Full Name" />
              </div>
              <FormInput id="email" name="email" type="email" placeholder="Email Address" />
              <FormInput id="phone" name="phone" type="tel" placeholder="Phone Number" />
              <div className="sm:col-span-2">
                <FormInput id="postcode" name="postcode" type="text" placeholder="Post Code" />
              </div>
              <div className="sm:col-span-2">
                <AutoSizingTextarea id="description" name="description" placeholder="Tell us about your project..." value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" disabled={isLoading} className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

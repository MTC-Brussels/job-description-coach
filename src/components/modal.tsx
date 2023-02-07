import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface ModalProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

/**
 * @param root0
 * @param root0.isOpen
 * @param root0.onToggle
 * @param root0.onAction
 * @param root0.children
 * @param root0.action
 * @param root0.type
 * @param root0.title
 * @param root0.description
 */
export default function Modal({
  title,
  description,
  isOpen,
  onToggle,
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
              className="fixed inset-0 z-20 bg-neutral-500 bg-opacity-75 transition ease-in-out"
              aria-hidden="true"
              onClick={onToggle}
            />

            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.7 }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
              className="relative z-40 inline-block transform overflow-hidden rounded-lg border border-black border-opacity-5 bg-white px-8 py-8 text-left align-bottom shadow-2xl transition ease-in-out sm:my-8 sm:w-full sm:max-w-xl sm:align-middle"
            >
              <div className="absolute top-0 right-0 hidden p-8 sm:block">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onToggle();
                  }}
                  type="button"
                  className="rounded-md bg-white text-neutral-400 transition hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 shadow sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>

                <div className="mt-3 flex-1  sm:mt-0 sm:ml-4 sm:text-left">
                  <div className={"mb-6"}>
                    <p className={"text-lg font-semibold text-neutral-900"}>
                      {title}
                    </p>
                    <p className={"text-sm text-neutral-500"}>{description}</p>
                  </div>
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2023 at 08:06 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `next`
--

-- --------------------------------------------------------

--
-- Table structure for table `bitacoras`
--

CREATE TABLE `bitacoras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `accion` varchar(255) NOT NULL,
  `entidad` varchar(255) NOT NULL,
  `usuario_id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `sistema_operativo` varchar(255) NOT NULL,
  `navegador` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bitacoras`
--

INSERT INTO `bitacoras` (`id`, `accion`, `entidad`, `usuario_id`, `fecha`, `hora`, `ip_address`, `sistema_operativo`, `navegador`, `created_at`, `updated_at`) VALUES
(1, 'Login', 'User', 1, '2023-09-09', '17:09:47', '127.0.0.1', 'Windows', 'Chrome', NULL, NULL),
(2, 'CREATE', 'PAGINA', 2, '2023-09-09', '17:09:47', '127.0.0.1', 'Windows', 'Chrome', '2023-09-11 05:29:55', '2023-09-11 05:29:55'),
(3, 'Login', 'User', 1, '2023-09-12', '11:35:23', '127.0.0.1', 'Windows', 'Chrome', '2023-09-12 23:39:22', '2023-09-12 23:39:22'),
(4, 'Login', 'User', 1, '2023-09-12', '11:35:23', '127.0.0.1', 'Windows', 'Chrome', '2023-09-12 23:39:42', '2023-09-12 23:39:42'),
(5, 'Login', 'User', 1, '2023-09-12', '11:35:23', '127.0.0.1', 'Windows', 'Chrome', '2023-09-12 23:57:49', '2023-09-12 23:57:49');

-- --------------------------------------------------------

--
-- Table structure for table `enlaces`
--

CREATE TABLE `enlaces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `pagina_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `orden` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enlaces`
--

INSERT INTO `enlaces` (`id`, `descripcion`, `pagina_id`, `role_id`, `orden`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'General y Seguridad', 1, 1, 100, 1, NULL, NULL),
(2, 'Roles', 2, 1, 110, 1, NULL, NULL),
(3, 'Usuarios', 3, 1, 120, 1, NULL, NULL),
(4, 'Enlaces', 4, 1, 130, 1, NULL, NULL),
(5, 'Bitacoras', 5, 1, 140, 1, NULL, NULL),
(6, 'Afiliados', 6, 2, 200, 1, NULL, NULL),
(7, 'Universidades', 7, 2, 210, 1, NULL, NULL),
(8, 'Especialidades', 8, 2, 220, 1, NULL, NULL),
(9, 'Demo', 1, 1, 125, 0, '2023-09-11 04:50:41', '2023-09-11 04:52:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_09_07_220724_create_personas_table', 1),
(5, '2023_09_07_220801_create_roles_table', 1),
(6, '2023_09_07_220922_create_paginas_table', 1),
(7, '2023_09_07_220930_create_users_table', 1),
(8, '2023_09_07_220948_create_enlaces_table', 1),
(9, '2023_09_07_221008_create_bitacoras_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `paginas`
--

CREATE TABLE `paginas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `icono` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paginas`
--

INSERT INTO `paginas` (`id`, `url`, `descripcion`, `icono`, `tipo`, `estado`, `created_at`, `updated_at`) VALUES
(1, '#', 'General y Seguridad', 'bx-notepad', 'Principal', 1, NULL, NULL),
(2, '/roles', 'Roles', 'bx-notepad', 'Sub-menu', 1, NULL, NULL),
(3, '/usuarios', 'Usuarios', 'bx-notepad', 'Sub-menu', 1, NULL, NULL),
(4, '/enlaces', 'Enlaces', 'bx-notepad', 'Sub-menu', 1, NULL, NULL),
(5, '/bitacoras', 'Bitacoras', 'bx-notepad', 'Sub-menu', 1, NULL, NULL),
(6, '#', 'Afiliados', 'bx-notepad', 'Principal', 1, NULL, NULL),
(7, '#', 'Universidades', 'bx-notepad', 'Sub-menu', 1, NULL, NULL),
(8, '#', 'Especialidades', 'bx-notepad', 'Sub-menu', 1, NULL, NULL),
(9, '/demo', 'demo', 'bx-notepad', 'demo', 0, '2023-09-11 04:36:07', '2023-09-11 04:37:42');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personas`
--

CREATE TABLE `personas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `primer_nombre` varchar(255) NOT NULL,
  `segundo_nombre` varchar(255) NOT NULL,
  `primer_apellido` varchar(255) NOT NULL,
  `segundo_apellido` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personas`
--

INSERT INTO `personas` (`id`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Herbert', 'Armando', 'Orellana', 'Torres', 1, NULL, NULL),
(2, 'nombre_1', 'nombre_2', 'apellido_1', 'apellido_2', 1, NULL, '2023-09-11 02:06:44'),
(3, 'Juan', 'Alberto', 'Flores', 'Juarez', 0, '2023-09-11 01:49:12', '2023-09-11 01:51:13'),
(4, 'Juan', 'Alberto', 'Flores', 'Juarez', 1, '2023-09-11 02:14:14', '2023-09-11 02:14:14');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `descripcion`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 1, NULL, NULL),
(2, 'Afiliado', 1, NULL, NULL),
(3, 'pruebas', 0, '2023-09-11 02:17:06', '2023-09-11 02:18:50'),
(4, 'Quality Assurance', 1, '2023-09-12 23:02:23', '2023-09-12 23:02:23'),
(5, 'Testing', 1, '2023-09-12 23:07:09', '2023-09-12 23:07:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `persona_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `email`, `password`, `persona_id`, `role_id`, `estado`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'user01', 'test@gmail.com', '123456', 1, 1, 1, NULL, NULL, NULL),
(2, 'usuario02', 'user2@gmail.com', '123456', 2, 2, 1, NULL, NULL, '2023-09-11 02:02:08'),
(3, 'user03', 'testing@gmail.com', '123456', 1, 1, 1, NULL, '2023-09-11 01:16:16', '2023-09-11 01:16:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bitacoras_usuario_id_foreign` (`usuario_id`);

--
-- Indexes for table `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enlaces_pagina_id_foreign` (`pagina_id`),
  ADD KEY `enlaces_role_id_foreign` (`role_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paginas`
--
ALTER TABLE `paginas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_persona_id_foreign` (`persona_id`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bitacoras`
--
ALTER TABLE `bitacoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `paginas`
--
ALTER TABLE `paginas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personas`
--
ALTER TABLE `personas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD CONSTRAINT `bitacoras_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `enlaces`
--
ALTER TABLE `enlaces`
  ADD CONSTRAINT `enlaces_pagina_id_foreign` FOREIGN KEY (`pagina_id`) REFERENCES `paginas` (`id`),
  ADD CONSTRAINT `enlaces_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_persona_id_foreign` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`id`),
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<html>

<head>
  <meta charset="UTF-8">
  <meta name="description" content="<?= $site->description() ?>">
  <meta name="keywords" content="<?= $site->keywords() ?>">
  <title>
    <?= $page->title() ?> | <?= $site->title() ?>
  </title>
  <?= css('assets/css/app.css') ?>
</head>

<body>
  <?= snippet('sections/header') ?>
  <main>
    <?= $slot ?>
  </main>
  <?= snippet('sections/footer') ?>
  <?= js('assets/js/app.js') ?>
</body>

</html>
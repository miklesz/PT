# Local Teaching Versions

Teaching pacing: videos replace spoken explanations, not add to them.
Self-study sections remain in Markdown between `<!-- study-only:start -->`
and `<!-- study-only:end -->`. The HTML builder excludes them from the slide
deck and lecture duration estimates. Preserve their content and controls.
Do not repeat a full worked example after a video covering the same procedure.

Clips live under `lectures/*/media/local-replacements/` and are ignored by Git.
Keep these downloaded videos and their posters local; do not publish them.
Markdown and HTML may be published with links to the original YouTube videos.
The HTML player uses the local clip when available and displays the original
YouTube link instead when the clip cannot be loaded. Preserve this fallback
when updating video slides. Local files must continue to work unchanged.

Before these replacements, Markdown and HTML copies of lectures 04, 07, 09,
10 and 11 were saved under `.build/before-local-video-replacements/`, with
one directory per lecture. Retain this backup until the replacements have
been reviewed by the lecturer.

Implemented replacements: twisted pair (04), CSMA/CA and CSMA/CD (07), hub
versus switch (09), Dijkstra example (10), DNS resolution (11). NAT remains
unchanged because its video could not be downloaded reliably. Other lectures
were intentionally left unchanged; avoid adding clips that expand the topic
or merely duplicate existing videos.

# Headless UI primitive stack

New interactive **Components** should wrap Ark UI **Primitives** when Ark provides the behavior. Use TanStack (Table, Virtual, etc.) for data-heavy UI such as **DsTable**. Build custom behavior only when neither fits. Radix remains allowed only in existing **Components** — do not add new Radix-based **Components**.

We standardized on Ark for new work to avoid duplicating accessibility and state logic, while keeping Radix in place until those areas are migrated. TanStack is the deliberate choice for large tabular/virtualized data surfaces where Ark does not replace the whole problem.
